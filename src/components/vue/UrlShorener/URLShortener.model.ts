import QRCode from 'qrcode';
import { ref } from 'vue';
import { URLShortener } from '../../../model/classes/UrlShortener';
import { URLValidator } from '../../../model/classes/UrlValidator';
export const buttonStyles = {
	default:
		'relative inline-flex items-center justify-center p-0.5 mb-2 me-2  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
	disabled:
		'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 opacity-50 cursor-not-allowed',
};
export const tooltipTime = 2000;
const minCharacters = 5;
export const copyPathIcons = {
	default: '../../../public/icons/Copy.svg',
	copied: '../../../public/icons/Copied.svg',
};

export const originalUrl = ref<string | undefined>();
export const shortUrl = ref<string>();
export const isFormValid = ref(false);
export const showMessage = ref({ show: false, isSuccess: true });
export const isCopied = ref(false);
export const qr = ref();

export const handleSubmit = (event: MouseEvent, url: string = '') => {
	event.preventDefault();
	validateForm(url);
	if (!isFormValid.value) {
		alert('Please enter a valid URL');
		return;
	}
	const urlShortener = new URLShortener(url);
	urlShortener
		.saveUrlShortened()
		.then((resp) => {
			console.log(resp);
			generateQRCode(urlShortener.urlOriginal.toString());
			shortUrl.value = urlShortener.urlShortened.toString();
			showMessage.value = {
				show: true,
				isSuccess: true,
			};
		})
		.catch((error) => {
			console.log(error);
			showMessage.value = {
				show: true,
				isSuccess: false,
			};
		})
		.finally(() => {
			setTimeout(() => {
				showMessage.value = {
					show: false,
					isSuccess: false,
				};
			}, 1000);
		});
};
export const validateForm = (urlString: string = '') => {
	if (!urlString) {
		isFormValid.value = false;
		return;
	}
	const urlValidator = new URLValidator(urlString);
	isFormValid.value = urlValidator.validateURL();
	showMessage.value = {
		show: !isFormValid.value,
		isSuccess: false,
	};
	//showErrors.value = !isFormValid.value && urlString.length > minCharacters;
};
export const copyToClipBoard = async (urlString?: string) => {
	if (!urlString) {
		return;
	}
	navigator.clipboard
		.writeText(urlString)
		.then(() => {
			isCopied.value = true;
			setTimeout(() => {
				isCopied.value = false;
			}, tooltipTime);
		})
		.catch((error) => console.error(error));
};
export const generateQRCode = async (urlString?: string) => {
	try {
		if (!urlString) {
			return;
		}
		qr.value = await QRCode.toDataURL(urlString);
	} catch (err) {
		console.error(err);
	}
};

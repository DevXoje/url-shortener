import { ref } from 'vue';
import { URLShortener } from '../../model/classes/URLShortener';
import { URLValidator } from '../../model/classes/URLValidator';
export const buttonStyles = {
    default: "relative inline-flex items-center justify-center p-0.5 mb-2 me-2  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
    disabled: "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 opacity-50 cursor-not-allowed"
};
export const tooltipTime = 2000;
const minCharacters = 5;
export const copyPathIcons = {
    default: '../../../public/icons/Copy.svg',
    copied: '../../../public/icons/Copied.svg'
};


export const originalUrl = ref<string | undefined>();
export const shortUrl = ref<string>();
export const isFormValid = ref(false);
export const showErrors = ref(false);
export const isCopied = ref(false);

export const shortenUrl = (event: MouseEvent, originalUrl: string = '') => {
    event.preventDefault();
    validateForm(originalUrl);
    if (!isFormValid.value) {
        return;
    }
    alert(originalUrl)
    const urlShortener = new URLShortener(originalUrl);
    shortUrl.value = urlShortener.urlShortened.toString();
};
export const validateForm = (urlString: string = '') => {
    if (!urlString) {
        isFormValid.value = false;
        return;
    }
    const urlValidator = new URLValidator(urlString)
    isFormValid.value = urlValidator.validateURL();
    showErrors.value = !isFormValid.value && urlString.length > minCharacters;
};
export const copyToClipBoard = (urlString?: string) => {
    if (!urlString) {
        return;
    }
    navigator.clipboard.writeText(urlString).then(() => {
        isCopied.value = true;
        setTimeout(() => {
            isCopied.value = false;
        }, tooltipTime);
    }).catch((error) =>
        console.error(error)
    );
};


<script setup lang='ts'>
import { ref } from 'vue';
import { UrlShortener } from '../model/classes/UrlShortener';
import { URLValidator } from '../model/classes/UrlValidator';

const originalUrl = ref<string>();
const shortUrl = ref<string>();
const isFormValid = ref(false);
const showErrors = ref(false);
function shortenUrl(event: any, originalUrl: string) {
	event.preventDefault();
	const regex = new RegExp('^(https?:\\/\\/)?' + // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
		'(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
	isFormValid.value = regex.test(originalUrl);
	console.log({ originalUrl, regex, formIsValid: isFormValid.value });
};
const validateForm = (urlString?: string) => {
	if (!urlString) {
		isFormValid.value = false;
		return;
	}
	const urlValidator = new URLValidator(urlString)

	console.log({ validate: urlValidator.validateURL(), value: urlValidator.url, urlString });

	isFormValid.value = urlValidator.validateURL();
	showErrors.value = !isFormValid.value && urlString.length > 5;
	console.log({ urlString, formIsValid: isFormValid.value });

};
const buttonStyles = {
	default: "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
	disabled: "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 opacity-50 cursor-not-allowed"
};

</script>
<template>
	<div>Original URL: {{ originalUrl }}</div>
	<div>Short URL: {{ shortUrl }}</div>

	<div class="url-shortener__wrapper bg-blue-600">
		<form class="url-shortener max-w-sm mx-auto">
			<label for="email" class="url-shortener__label mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
				email</label>
			<div class="relative w-full">
				<div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
					<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
						<path
							d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
						<path
							d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
					</svg>
				</div>
				<input type="url" name="url" aria-describedby="helper-text-explanation"
					class="url-shortener__input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="http://localhost:4321/?url=baaaa" v-model="originalUrl">
			</div>
			<!-- v-if="showErrors" -->
			<p id="helper-text-explanation" class="url-shortener__errors mt-2 text-sm text-gray-500 dark:text-gray-400">
				We’ll never share your
				details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy
					Policy</a>.</p>
		</form>


		<button :disabled="!isFormValid" @click="(event) => shortenUrl(event, originalUrl ?? '')" type="button"
			:class="isFormValid ? buttonStyles.default : buttonStyles.disabled"
			@mouseenter="validateForm(originalUrl)">Purple</button>
	</div>
	isFormValid=>{{ isFormValid }}
</template>
<style scoped>
.url-shortener {
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;

	&__wrapper {
		display: flex;
	}

	&__label {
		position: absolute;
	}

	&__input {
		padding-left: 50px;

		&:valid {
			color: red
		}

		&:invalid {
			color: greenyellow
		}

		/* Placeholder styles */
		&::-webkit-input-placeholder {}



	}

	&__errors {
		position: absolute;
		bottom: -140px;
		color: red;
		background-color: #fff;
	}
}
</style>
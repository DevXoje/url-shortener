
<script setup lang='ts'>
import { ref } from 'vue';
const originalUrl = ref<string | undefined>();
import { buttonStyles, isCopied, isFormValid, shortUrl, showErrors, copyPathIcons, copyToClipBoard, shortenUrl, validateForm } from './URLShortener.model';


</script>
<template>
	<div class="url-shortener__wrapper bg-blue-600">
		<form class="url-shortener">
			<label for="url" class="url-shortener__label mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
				URL</label>
			<div class="relative w-full">
				<img src="../../../public/icons/Link.svg"
					class="absolute inset-y-8 start-0 pointer-events-none url-shortener__input__icon" />
				<input type="url" name="url" id="url" aria-describedby="helper-text-explanation"
					class="url-shortener__input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="http://localhost:4321/?url=baaaa" v-model="originalUrl">
			</div>
			<!-- v-if="showErrors" -->
			<p id="helper-text-explanation" class="url-shortener__errors mt-2 text-sm text-gray-500 dark:text-gray-400">
				We’ll never share your
				details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy
					Policy</a>.</p>
		</form>


		<button :disabled="!isFormValid" @click="(event) => shortenUrl(event, originalUrl)" type="button"
			class='url-shortener__button' :class="isFormValid ? buttonStyles.default : buttonStyles.disabled"
			@mouseenter="validateForm(originalUrl)">short</button>
	</div>
	<div class="url-shortener__wrapper bg-blue-600" v-if='shortUrl'>
		<form class="url-shortener url-shortener__result">
			<label for="url" class="url-shortener__label mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
				URL</label>
			<div class="relative w-full">
				<img src="../../../public/icons/Link.svg"
					class="absolute inset-y-8 start-0 pointer-events-none url-shortener__input__icon" />
				<input type="url" name="url" id="url" aria-describedby="helper-text-explanation"
					class="url-shortener__input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					v-model="shortUrl">
			</div>

		</form>
		<button @click="(event) => copyToClipBoard(shortUrl)" type="button" class='url-shortener__button'
			:class="buttonStyles.default">
			<img :src="isCopied ? copyPathIcons.copied : copyPathIcons.default" class="url-shortener__input__icon" />
			<span class='url-shortener__button__tooltip' :class="isCopied ? 'url-shortener__button__tooltip-show' : ''">
				<img src="../../../public/icons/Done.svg" class="url-shortener__input__icon" /></span>
		</button>
	</div>
</template>
<style scoped>
@import './URLShortener.css';
</style>
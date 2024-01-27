<script setup lang="ts">
import { ref } from "vue";
import {
applyShortenUrl,
copyPathIcons,
copyToClipBoard,
isCopied,
isFormValid,
qr,
shortUrl,
validateForm
} from "./URLShortener.model";
const originalUrl = ref<string | undefined>();
</script>
<template>
  <div class="m-auto w-1/2">
    <form class="mt-8 space-y-6">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="url" class="sr-only"> URL </label>
          <input
            class="h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            id="url"
            required="true"
            placeholder="Paste your long URL here"
            type="url"
            name="url"
            @keyup="validateForm(originalUrl)"
            v-model="originalUrl"
          />
        </div>
      </div>
      <div>
        <button
          class="items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="(event) => applyShortenUrl(event, originalUrl)"
          type="button"
          :disabled="!isFormValid"
        >
          Shorten URL
        </button>
      </div>
    </form>
    <div v-if="shortUrl">
      <div class="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
        <p>Your shortened URL:</p>
        <p class="mt-2 text-lg text-gray-900 dark:text-gray-100">
          {{ shortUrl }}
        </p>
        <button
		@click="(event) => copyToClipBoard(shortUrl)"
          class="items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
		<img
          :src="isCopied ? copyPathIcons.copied : copyPathIcons.default"
          class="url-shortener__input__icon"
        /></button>
        <div class="mt-4">
          <p>Your QR Code:</p>
          <img
            alt="QR Code"
            class="mx-auto mt-2"
            width="200"
            height="200"
            style="aspect-ratio: 200 / 200; object-fit: cover"
			:src="qr"
          />
        </div>
      </div>
     
    </div>
  </div>
  
</template>
<style scoped>
/* @import "./URLShortener.css"; */
</style>

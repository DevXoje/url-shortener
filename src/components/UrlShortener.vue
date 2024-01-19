
<script setup>
import { ref } from 'vue';
//import db from '../firebase';

const originalUrl = ref('');
const shortUrl = ref('');
const shortenUrl = async () => {
	// Implement logic to generate short URL and save to Firebase Firestore
	// Example: Add a new document to the "urls" collection with original and short URL
	// Display the short URL to the user
};
</script>
<template>
	<div class="flex items-center justify-center bg-blue-600">
		<form class="flex w-full mx-10 rounded bg-white" method="POST">
			<input class="w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none"
				placeholder="Enter URL" type="url" name="url" required />
			<button type="submit" class="m-2 rounded bg-blue-600 px-4 py-2 text-white">
				short
			</button>
		</form>
		<div v-if="shortUrl">Short URL: {{ shortUrl }}</div>
	</div>
</template>

<style></style>

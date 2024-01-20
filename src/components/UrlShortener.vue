

<template>
	<div class="flex items-center justify-center bg-blue-600">
		<form class="flex w-full mx-10 rounded bg-white">
			<input class="w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none"
				placeholder="Enter URL" type="url" name="url" v-model=originalUrl required />

		</form>
		<button class="m-2 rounded bg-white px-4 py-2 text-blue-600" @click.native="openMenu(true)">
			vue
		</button>

	</div>
	<div>Short URL: {{ originalUrl }}</div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';

const originalUrl = ref('base');
const shortUrl = ref('new');
function shortenUrl() {
	alert('Shorten URL button clicked');
	//shortUrl = 'https://short.url/123456';
	// Implement logic to generate short URL and save to Firebase Firestore
	// Example: Add a new document to the "urls" collection with original and short URL
	// Display the short URL to the user
};
const openMenu = (action: boolean) => {
	alert('Open menu button clicked');
}

</script>
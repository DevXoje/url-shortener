import { BASE_URL, generateUrlShortened } from '../const';
import type { URLShortenerModel } from '../interfaces/UrlShortenerModel';
import { URLShortenerDTOCreate } from './UrlShortenerDTOCreate';

export class URLShortener implements URLShortenerModel {
	urlBase: URL;
	urlOriginal: URL;
	urlShortened: URL;
	constructor(urlOriginal: URL | string) {
		this.urlBase = new URL(BASE_URL);
		this.urlOriginal =
			urlOriginal instanceof URL ? urlOriginal : new URL(urlOriginal);
		this.urlShortened = generateUrlShortened(this.urlBase);
	}

	public async saveUrlShortened() {
		const dto = new URLShortenerDTOCreate({
			urlOriginal: this.urlOriginal.toString(),
			pathName: this.urlShortened.pathname,
		});
		const formData = URLShortenerDTOCreate.marshalFormDataUrlDTO(dto);
		const response = await fetch('/api/url', {
			method: 'POST',
			body: formData,
		});
		if (response.ok) {
			return;
		}
		const error = await response.text();
		console.error(error);
	}
}

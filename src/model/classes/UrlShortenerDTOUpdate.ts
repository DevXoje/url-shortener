/* import type { UrlShortenerDTOUpdateModel } from '../interfaces/UrlShortenerDTOUpdate';
import type { URLShortener } from './URLShortener';
export class URLShortenerDTOUpdate implements UrlShortenerDTOUpdateModel {
	urlBase: string;
	urlShortened: string;
	constructor(item: URLShortener) {
		this.urlBase = item.urlBase.toString();
		this.urlShortened = item.urlShortened.toString();
	}

	// public static marshalUrlDTOFormData(
	// 	formData: FormData,
	// ): UrlShortenerDTOUpdateModel {
	// 	const urlBase = formData.get('urlBase');
	// 	const urlShortened = formData.get('urlShortened');
	// 	if (!(typeof urlBase === 'string' && typeof urlShortened === 'string')) {
	// 		throw new Error('Missing required fields');
	// 	}
	// 	return { urlBase, urlShortened };
	// }
}
 */

import type { UrlShortenerDTOModel } from '../interfaces/URLShortenerDTOModel';
import type { URLShortener } from './URLShortener';

export class URLShortenerDTO implements UrlShortenerDTOModel {

    urlBase: string;
    urlShortened: string;
    id: `${string}-${string}-${string}-${string}-${string}`;

    constructor(item: URLShortener) {
        this.urlBase = item.urlBase.toString();
        this.urlShortened = item.urlShortened.toString();
        this.id = crypto.randomUUID();
    }

}
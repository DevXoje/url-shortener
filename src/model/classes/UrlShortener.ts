import type { URLShortenerModel } from '../interfaces/URLShortenerModel';
import { URLShortenerDTO } from './URLShortenerDTO';
import ShortUniqueId from 'short-unique-id';
const { randomUUID } = new ShortUniqueId({ length: 10 });
export class URLShortener implements URLShortenerModel {
    urlBase: URL;
    urlOriginal: URL;
    urlShortened: URL;
    constructor(urlOriginal: URL | string) {
        this.urlBase = new URL('https://localhost:3000');
        this.urlOriginal = urlOriginal instanceof URL ? urlOriginal : new URL(urlOriginal);
        this.urlShortened = this.generateUrlShortened(this.urlBase);
        this.saveUrlShortened(this);
    }

    private generateUrlShortened(urlBase: URL): URL {
        const randomValue = randomUUID();
        urlBase.pathname = randomValue;
        return urlBase;
    }
    private saveUrlShortened(urlToSave: URLShortener): void {
        const urlDTO = new URLShortenerDTO(urlToSave);
        console.warn("TODO: real save", urlDTO);
    }

}
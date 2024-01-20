import type { URLShortenerModel } from '../interfaces/URLShortenerModel';
import { URLShortenerDTO } from './URLShortenerDTO';

export class URLShortener implements URLShortenerModel {
    urlBase: URL;
    urlOriginal: URL;
    urlShortened: URL;
    constructor(urlOriginal: URL | string) {
        this.urlBase = new URL('https://localhost:3000');
        this.urlOriginal = urlOriginal instanceof URL ? urlOriginal : new URL(urlOriginal);
        console.log(this.urlOriginal);
        this.urlShortened = this.generateUrlShortened(this.urlOriginal);
        this.saveUrlShortened(this);
    }

    private generateUrlShortened(urlOriginal: URL): URL {
        const stringUrlOriginal = urlOriginal.toString();
        const urlShortened = new URL(stringUrlOriginal.slice(0, 15), this.urlBase);
        return urlShortened;
    }
    private saveUrlShortened(urlToSave: URLShortener): void {
        const urlDTO = new URLShortenerDTO(urlToSave);
        console.warn("TODO: real save", urlDTO);
    }

}
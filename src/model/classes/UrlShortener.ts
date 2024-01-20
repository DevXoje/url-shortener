import type { UrlShortenerModel } from '../interfaces/UrlShortenerModel';

export class UrlShortener implements UrlShortenerModel {
    urlBase: URL;
    urlOriginal: URL;
    urlShortened: URL;
    constructor(urlOriginal: URL) {
        this.urlBase = new URL('https://localhost:3000');
        this.urlOriginal = urlOriginal;
        this.urlShortened = this.generateUrlShortened(this.urlOriginal);
    }

    private generateUrlShortened(urlOriginal: URL): URL {
        return urlOriginal
    }

}
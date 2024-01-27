export interface URLShortenerModel {
	urlBase: URL;
	urlOriginal: URL;
	urlShortened: URL;
	saveUrlShortened(): Promise<void>;
}

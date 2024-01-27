/* export interface UrlShortenerDTOModel {
	urlOriginal: string;
	pathName: string;
	id: string;
} */

type RequiredAttributes = Required<{
	urlOriginal: string;
	pathName: string;
}>;
type OptionalAttributes = Partial<{
	id: string;
}>;
export type UrlShortenerDTOModel = RequiredAttributes & OptionalAttributes;

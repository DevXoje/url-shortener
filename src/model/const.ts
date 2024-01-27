import ShortUniqueId from 'short-unique-id';
import type { UrlShortenerDTOCreateModel } from './interfaces/UrlShortenerDTOCreateModel';
const idLength = 10;
export const BASE_URL = import.meta.env.APP_URL ?? 'http://localhost:4321';
const { randomUUID } = new ShortUniqueId({ length: idLength });
export const generateUrlShortened = (urlBase: URL): URL => {
	const randomValue = randomUUID();
	const prefix = 'short';
	urlBase.pathname = `${prefix}/${randomValue}`;
	return urlBase;
};
export const hasUrlValidFormat = (url: string): boolean => {
	return !!new URL(url);
};
export const hasPathNameValidFormat = (pathName?: string): boolean => {
	if (!pathName) {
		throw new Error('Missing pathname');
	}
	const startsWithSlash = pathName.startsWith('/');
	const hasValidLength = pathName.length === idLength + 1;

	if (!hasValidLength || !startsWithSlash) {
		throw new Error(`Invalid pathname format ${pathName}`);
	}
	return hasValidLength;
};
export const hasIdValidFormat = (id?: string): boolean => {
	if (!id) {
		throw new Error('Missing id');
	}
	const regex = new RegExp(
		/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
	);
	if (!regex.test(id)) {
		throw new Error('Invalid id format');
	}
	return regex.test(id);
};
export const hasValidUrlShortenerDTOCreate = ({
	urlOriginal,
	pathName,
	id,
}: UrlShortenerDTOCreateModel): boolean => {
	return (
		hasUrlValidFormat(urlOriginal) &&
		hasPathNameValidFormat(pathName) &&
		hasIdValidFormat(id)
	);
};

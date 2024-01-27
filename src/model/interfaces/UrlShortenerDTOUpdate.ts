import type { UrlShortenerDTOCreateModel } from './UrlShortenerDTOCreateModel';

export interface UrlShortenerDTOUpdateModel
	extends Omit<UrlShortenerDTOCreateModel, 'id'> {}

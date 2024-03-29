import type {
	DocumentData,
	QueryDocumentSnapshot,
	SnapshotOptions,
	WithFieldValue,
} from 'firebase/firestore';
import { hasValidUrlShortenerDTOCreate } from '../const';
import type { UrlShortenerDTOCreateModel } from '../interfaces/UrlShortenerDTOCreateModel';
import type { UrlShortenerDTOModel } from '../interfaces/UrlShortenerDTOModel';

export class URLShortenerDTOCreate implements UrlShortenerDTOCreateModel {
	urlOriginal: string;
	pathName: string;
	id: string;

	constructor(item: UrlShortenerDTOModel) {
		this.urlOriginal = item.urlOriginal;
		this.pathName = item.pathName;
		this.id = item.id ?? crypto.randomUUID();
	}

	public static marshalSnapshotUrlDTOCreate(
		documentData: DocumentData,
	): UrlShortenerDTOCreateModel {
		if (!documentData) {
			throw new Error('Missing required fields');
		}
		return {
			urlOriginal: documentData.urlOriginal,
			pathName: documentData.pathName,
			id: documentData.id,
		};
	}

	public static marshalUrlDTOFormData(
		formData: FormData,
	): UrlShortenerDTOCreateModel {
		const urlOriginal = formData.get('urlOriginal');
		const pathName = formData.get('pathName');
		const id = formData.get('id');
		if (
			!(
				typeof urlOriginal === 'string' &&
				typeof pathName === 'string' &&
				typeof id === 'string'
			)
		) {
			throw new Error('Missing required fields');
		}
		let pathPurgePrefix = pathName;
		if (pathName.startsWith('/short')) {
			pathPurgePrefix = pathName.replace('/short', '');
		}
		if (
			!hasValidUrlShortenerDTOCreate({
				urlOriginal,
				pathName: pathPurgePrefix,
				id,
			})
		) {
			throw new Error(
				`Fields are not valid ${urlOriginal} ${pathPurgePrefix} ${id}`,
			);
		}
		const cleanPathName = pathPurgePrefix.replace('/', '');
		return { urlOriginal, pathName: cleanPathName, id };
	}
	public static marshalFormDataUrlDTO(item: URLShortenerDTOCreate): FormData {
		const formData = new FormData();
		//remove the /short prefix
		if (item.pathName.startsWith('/short')) {
			item.pathName = item.pathName.replace('/short', '');
		}
		formData.append('urlOriginal', item.urlOriginal);
		formData.append('pathName', item.pathName);
		formData.append('id', item.id);
		return formData;
	}
	public static getConverter(): {
		toFirestore: (data: WithFieldValue<UrlShortenerDTOCreateModel>) => {};
		fromFirestore: (
			snapshot: QueryDocumentSnapshot,
			options: SnapshotOptions,
		) => any;
	} {
		return {
			toFirestore: URLShortenerDTOCreate.toFirestore,
			fromFirestore: URLShortenerDTOCreate.fromFirestore,
		};
	}
	private static toFirestore = (
		data: WithFieldValue<UrlShortenerDTOCreateModel>,
	) => {
		return {
			urlOriginal: data.urlOriginal,
			pathName: data.pathName,
			id: data.id,
		};
	};
	private static fromFirestore = (
		snapshot: QueryDocumentSnapshot,
		options: SnapshotOptions,
	): UrlShortenerDTOCreateModel => {
		const data = snapshot.data(options);
		return URLShortenerDTOCreate.marshalSnapshotUrlDTOCreate(data);
	};
}

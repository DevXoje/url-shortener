import type { APIRoute } from 'astro';
import { urlRefAdminDB } from '../../../lib/firebase/server/db';
import { URLShortenerDTOCreate } from '../../../model/classes/UrlShortenerDTOCreate';
import type { UrlShortenerDTOCreateModel } from '../../../model/interfaces/UrlShortenerDTOCreateModel';

export const POST: APIRoute = async ({ request }) => {
	const formData = await request.formData();
	let url: UrlShortenerDTOCreateModel;
	try {
		url = URLShortenerDTOCreate.marshalUrlDTOFormData(formData);
	} catch (error: any) {
		return new Response(error.message, {
			status: 400,
		});
	}
	try {
		const id = url.id;
		if (!id) {
			return new Response('Something went wrong', {
				status: 500,
			});
		}
		const converter: any = URLShortenerDTOCreate.getConverter();
		const refNewDoc = urlRefAdminDB.doc(id).withConverter(converter);
		await refNewDoc.set(url);
	} catch (error) {
		return new Response('Something went wrong', {
			status: 500,
		});
	}
	return new Response('Success', {
		status: 200,
	});
};

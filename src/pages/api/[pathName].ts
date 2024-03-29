import type { APIRoute } from 'astro';
import {
	collection,
	getDocs,
	query,
	where,
	type DocumentData,
	type QueryDocumentSnapshot,
	type QuerySnapshot,
} from 'firebase/firestore';
import { clientDB } from '../../lib/firebase/client/client';
import { CollectionNameURL } from '../../lib/firebase/server/db';
export const GET: APIRoute = async ({ params, redirect }) => {
	if (!params.pathName) {
		return new Response('Cannot find url', {
			status: 404,
		});
	}
	const pathName = params.pathName;

	let querySnapshot: QuerySnapshot<DocumentData, DocumentData>;
	try {
		//const converter: any = URLShortenerDTOCreate.getConverter();
		const q = query(
			collection(clientDB, CollectionNameURL),
			where('pathName', '==', pathName),
		);
		querySnapshot = await getDocs(q);
	} catch (error: any) {
		return new Response(error.message, {
			status: 500,
		});
	}
	let docSnap: QueryDocumentSnapshot<DocumentData, DocumentData>;
	try {
		if (querySnapshot.docs.length === 0) {
			return redirect('/', 308);
		}
		docSnap = querySnapshot.docs[0];
	} catch (error: any) {
		return new Response(error.message, {
			status: 500,
		});
	}
	if (!docSnap.exists()) {
		return new Response('No such document!', {
			status: 404,
		});
	}

	const { urlOriginal } = docSnap.data();
	const url = new URL(urlOriginal);
	return redirect(url.toString(), 308);
};

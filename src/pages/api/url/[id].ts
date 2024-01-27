import type { APIRoute } from 'astro';
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';

export const DELETE: APIRoute = async ({ params }) => {
	if (!params.id) {
		return new Response('Cannot find url', {
			status: 404,
		});
	}
	const id = params.id;
	try {
		const db = getFirestore();
		await deleteDoc(doc(db, 'url', id));
	} catch (error: any) {
		return new Response(error.message, {
			status: 500,
		});
	}
	return new Response('Success', {
		status: 200,
		statusText: 'url deleted',
	});
};

/* 
export const POST: APIRoute = async ({ params, request }) => {
  const formData = await request.formData();
  let url:UrlShortenerDTOUpdateModel;
  try {
   url = URLShortenerDTO.marshalUrlDTOFormDataUpdate(formData)

  } catch (error: any) {
      return new Response(error.message, {
          status: 400,
        });
  }
  if (!params.id) {
    return new Response("Cannot find url", {
      status: 404,
    });
  }
  const id= params.id;
  console.log(url)
  try {
    await urlRef.doc(id).update(url);
  } catch (error:any) {
    console.error(error);
    
    return new Response("Something went wrong", {
      status: 500,
      statusText: error.message
    });
   
}
return new Response("Success", {
  status: 200,
});
} */
/* export const GET: APIRoute = async ({ params }) => {
	if (!params.id) {
		return new Response('Cannot find url', {
			status: 404,
		});
	}
	const id = params.id;
	let docSnap: DocumentSnapshot<DocumentData, DocumentData>;
	try {
		const converter: any = URLShortenerDTOCreate.getConverter();
		const docRef = doc(clientDB, CollectionNameURL, id).withConverter(
			converter,
		);
		docSnap = await getDoc(docRef);
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
	return new Response(url.toString(), {});
}; */

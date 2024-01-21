import type { APIRoute } from 'astro';
import { getURLS } from '../../../lib/firebase/db'
// GET ALL USERS

export const GET: APIRoute = async ({ params, request }) => {
    const urls = await getURLS()
    console.log(urls)
    return new Response(
        JSON.stringify({
            urls
        })
    )
}


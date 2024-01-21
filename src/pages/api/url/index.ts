import type { APIRoute } from 'astro';
// GET ALL USERS
const usernames = ["Sarah", "Chris", "Yan", "Elian"]

export const GET: APIRoute = ({ params, request }) => {
    return new Response(
        JSON.stringify({
            usernames
        })
    )
}


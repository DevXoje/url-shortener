import type { APIRoute } from 'astro';

const usernames = ["Sarah", "Chris", "Yan", "Elian"]

export const GET: APIRoute = ({ params, request }) => {
    return new Response(
        JSON.stringify({
            usernames
        })
    )
}

export function getStaticPaths() {
    return [
        { params: { id: "0" } },
        { params: { id: "1" } },
        { params: { id: "2" } },
        { params: { id: "3" } }
    ]
}
/* 
export function get(req, res) {
  const { shortCode } = req.params;
  const originalUrl = urlDatabase[`/${shortCode}`];
  if (originalUrl) {
    res.json({ originalUrl });
  } else {
    res.status(404).send('URL not found');
  }
} */
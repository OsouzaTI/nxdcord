import type { NextApiRequest, NextApiResponse } from 'next'

export default async function login(req : NextApiRequest, res : NextApiResponse) {

    const response = await fetch(`${process.env.API_ENDPOINT}/user/edit`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: req.body
    });

    const message = await response.json();
    res.status(response.status).json(message);

}
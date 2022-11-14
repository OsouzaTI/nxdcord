import type { NextApiRequest, NextApiResponse } from 'next'

export default async function add(req : NextApiRequest, res : NextApiResponse) {

    const response = await fetch(`${process.env.API_ENDPOINT}/user/add`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: req.body
    });

    const message = await response.json();
    res.status(response.status).json(message);

}
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function login(req : NextApiRequest, res : NextApiResponse) {

    // executando login
    const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: req.body
    });

    const data = await response.json();
    
    if(data['token']) {
        res.status(200).json(data);
    } else {
        res.status(403).json({'status': 0});
    }

}
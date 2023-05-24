import fetch from 'node-fetch';
import { APIKey, APISecret, username } from '../config/Cryptrack.js';
export const addDigitalStamp = async (req, res) => {
    try {
        // const url = 'https://cryptrack-saewf.herokuapp.com/send';
        const url = 'http://localhost:8000/send';
        let jsonBody = { ...req.body, msg: req.body.content, content: '' };
        for (let key in jsonBody) {
            if (jsonBody.hasOwnProperty(key)) {
                jsonBody[key] === '' || jsonBody[key] === undefined || jsonBody[key] === 'undefined' && delete jsonBody[key];
            }
        }
        if (!jsonBody.hasOwnProperty('msg'))
            jsonBody[msg] = '';
        const res = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                apikey: APIKey,
                apisecret: APISecret,
                username: username,
            },
            body: JSON.stringify(jsonBody)
        });
        // console.log(res);
    } catch (err) {
        console.log(err);
        return res.status(403).json("Error while adding digital stamping!");
    }
};

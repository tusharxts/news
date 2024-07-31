// // api/news.js
// const fetch = require('node-fetch');

// module.exports = async (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//     if (req.method === 'OPTIONS') {
//         res.status(200).end();
//         return;
//     }

//     const { query } = req.query;
//     const API_KEY = "5a8253eb12fc492e92290d05fbcef50a";
//     const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
//     const data = await response.json();
//     res.status(200).json(data);
// };

import fetch from 'node-fetch';
// const API_KEY = "5a8253eb12fc492e92290d05fbcef50a";
module.exports = async (req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
            res.status(200).end();
            return;
        }

        const { query } = req.query;
        if (!query) {
            res.status(400).json({ error: 'Query parameter is required' });
            return;
        }

        // const API_KEY = process.env.API_KEY;

        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=5a8253eb12fc492e92290d05fbcef50a`);
        if (!response.ok) {
            throw new Error(`News API request failed with status ${response.status}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error in /api/news:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

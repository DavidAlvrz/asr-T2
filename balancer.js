import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;
const nodeIps = [
    '192.168.56.22',
    '192.168.56.23',
];
let lastNode = -1;

app.get('/app', async function (req, res) {
    lastNode = (lastNode + 1) % nodeIps.length;

    try {
        const url = `http://${nodeIps[lastNode]}:${port}/app`;
        const response = await fetch(url);
        const body = await response.text();
        res.send(`Response from ${nodeIps[lastNode]}: ${body}`);
    } catch (error) {
        res.status(500).send(`Error fetching from ${nodeIps[lastNode]}: ${error.message}`);
    }
});

app.listen(3000, function () {
    console.log('Load balancer is running on port 3000');
});

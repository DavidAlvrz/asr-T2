//Express app with routes on port 3000
const express = require('express');
const app = express();
const port = 3000;

app.get('/add/:p1/:p2', (req, res) => {
    const p1 = parseInt(req.params.p1);
    const p2 = parseInt(req.params.p2);
    const total = p1 + p2;
    res.send('Result is : ' + total);
});

app.get('/sub/:p1/:p2', (req, res) => {
    const p1 = parseInt(req.params.p1);
    const p2 = parseInt(req.params.p2);
    const total = p1 - p2;
    res.send('Result is : ' + total);
});

app.get('/mult/:p1/:p2', (req, res) => {
    const p1 = parseInt(req.params.p1);
    const p2 = parseInt(req.params.p2);
    const total = p1 * p2;
    res.send('Result is : ' + total);
});

app.get('/div/:p1/:p2', (req, res) => {
    const p1 = parseInt(req.params.p1);
    const p2 = parseInt(req.params.p2);
    const total = p1 / p2;
    res.send('Result is : ' + total);
});

app.listen(port, () => {
    console.log(`Node is running on port ${port}`);
});

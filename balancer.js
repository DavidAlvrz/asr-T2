const express = require('express');
const app = express();

const port = 3000;
const nodeIps = [
    '192.168.56,22',
    '192.168.56,23',
];
let lastNode = -1;

app.get('/app', function (req, res) {
    let node = (lastNode + 1);
    if (node >= nodeIps.length)
        node = 0;

    const response = fetch(`http://${nodeIps[node]}:${port}/app`);
    res.send(`Response from ${nodeIps[node]}: ${response}`);

});

app.listen(3000, function () {
    console.log('Load balancer is running on port 3000');
});
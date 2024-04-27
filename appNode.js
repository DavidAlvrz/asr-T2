const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/app', (req, res) => {
    res.send('Respuesta desde un nodo')
});

app.listen(port, () => {
    console.log(`Node is running on port ${port}`);
});

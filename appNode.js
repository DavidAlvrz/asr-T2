// Express app with routes on port 3000
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Sirviendo archivos estáticos desde 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/app', (req, res) => {
    res.send('Response from App');
});

app.listen(port, () => {
    console.log(`Node is running on port ${port}`);
});
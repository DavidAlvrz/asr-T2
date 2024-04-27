// Express app with routes on port 3000
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Sirviendo archivos estáticos desde 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/app', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Entregable 2</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
                color: #333;
                text-align: center;
            }
            header {
                background-color: #333;
                color: white;
                padding: 20px 0;
                margin-bottom: 20px;
            }
            h1 {
                margin: 0;
                padding: 0;
            }
            h2 {
                color: #555;
            }
            footer {
                background-color: #333;
                color: white;
                position: fixed;
                bottom: 0;
                width: 100%;
                padding: 10px 0;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Administración de sistemas y redes - Entregable 2</h1>
        </header>
        <main>
            <h2>Welcome to the app</h2>
            <img src="work-cat.gif" style="width:300px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante
                dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                nec tellus sed augue semper porta. Mauris massa.
            </p>
        </main>
        <footer>
            <p>Zohaib Akhtar Kausar-UO291060, David Álvarez Menéndez-UO288705</p>
            <p>Todos los derechos reservados ©</p>
        </footer>
    </body>
</html>`);
});

app.listen(port, () => {
    console.log(`Node is running on port ${port}`);
});

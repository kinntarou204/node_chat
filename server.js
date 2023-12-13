// Express の作成
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
// publicフォルダを、Web公開
app.use(express.static(__dirname + '/public'));

const { createServer } = require('node:http');
const server = createServer(app);

const dotenv = require('dotenv');
dotenv.config();
const host = process.env.HOST
const port = process.env.PORT

server.listen(port, host, () => {
    console.log(`listening on http://${host}:${port}`);
    })
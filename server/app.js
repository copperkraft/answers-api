'use strict';

const express = require('express');
const dbConnection = require('./data/db-connetction');

const PORT = process.env['PORT'] || 8001;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
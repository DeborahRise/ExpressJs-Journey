//Basic method for reading from a file in an express server

const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.listen(8000, () => {console.log('Baby running on 8000')});

// note: the url on the browser must include the .html extension to work
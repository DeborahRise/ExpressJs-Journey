// Minimal api/route set up

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>we are here</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>are we not</h1>');
});
app.listen(8000, () => {console.log('Baby running on 8000')});
// static server
const express = require('express');
const path = require('path');

const app = express();

//setup static folder for quick easy routing
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });
app.listen(8000, () => {console.log('Baby running on 8000')});
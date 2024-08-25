# Node.js and Express.js Journey

Welcome to my journey through Node.js and Express.js! 🚀 This document chronicles my adventures in learning these powerful technologies. From setting up basic servers to handling complex requests, follow along as I dive into the world of Node.js and Express.

## Node.js Journey

### Chapter 1: Basics of Node.js

My Node.js adventure began with learning the core concepts:

- **Creating a Server**

    ```javascript
    const http = require('http');

    const PORT = process.env.PORT || 3000;

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    });

    server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    });
    ```

- **Reading and Writing Files**

    ```javascript
    const fs = require('fs').promises;

    // Reading a file
    const fsreadfile = async () => {
        try {
            const data = await fs.readFile('./text.txt', 'utf8');
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    fsreadfile();

    // Writing a file
    const fswritefile = async () => {
        try {
            await fs.writeFile('./newfile.txt', "I am a new file");
            console.log('File written successfully');
        } catch (error) {
            console.error(error);
        }
    };
    fswritefile();
    ```

- **Using Crypto for Encryption**

    ```javascript
    const crypto = require('crypto');

    const algorithm = 'aes-256-cbc';
    const key = crypto.randomBytes(32); // Ensure the key length matches the algorithm
    const iv = crypto.randomBytes(16);  // Initialization vector should be 16 bytes

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update('secret message', 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    console.log(`Encrypted message: ${encrypted}`);
    ```

### Chapter 2: Event Handling

- **Creating Custom Events**

    ```javascript
    import { EventEmitter } from 'events';

    const emitter = new EventEmitter();

    const greethandler = () => {
        console.log('Hello World');
    };

    const byehandler = () => {
        console.log('Goodbye World');
    };

    emitter.on('greet', greethandler);
    emitter.on('bye', byehandler);

    emitter.emit('greet');
    emitter.emit('bye');
    ```

### Chapter 3: Middleware and Error Handling

- **Creating a Simple Express Server**

    ```javascript
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Welcome to my Express.js app!');
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    ```

- **Handling Routes and Middleware**

    ```javascript
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.use(express.json());

    const logger = (req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next();
    };

    app.use(logger);

    app.get('/api/users', (req, res) => {
        res.json([{ id: 1, name: 'Deborah' }]);
    });

    app.post('/api/users', (req, res) => {
        const newUser = req.body;
        res.status(201).json(newUser);
    });

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    ```

## Express.js Journey

### Chapter 1: Setting Up the Express Playground

My adventure began with setting up a basic Express server. It was like setting up my very own playground:

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

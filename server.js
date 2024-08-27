import express from 'express';
import path from 'path';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import posts from './routes/posts.js';
import { fileURLToPath } from 'url'

const app = express();
const PORT = process.env.PORT || 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

//setup static folder for quick easy routing
app.use(express.static(path.join(__dirname, 'public')));

//Routes;
app.use('/api/posts', posts);

// Notfound
app.use(notFound)
// error handler
app.use(errorHandler);







app.listen(PORT, () => {console.log(`Odogwu running on ${PORT}`)});
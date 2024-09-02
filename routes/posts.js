import express, { json } from 'express';
import { 
    DELETEPost, GETPost, GETPosts, POSTPost, PUTPost
} from '../controllers/postController.js';

const router = express.Router();

// GET All Posts /api/posts
router.get('/', GETPosts);

// GET single Posts /api/posts/:id
router.get('/:id', GETPost);

// Create new post
router.post('/', POSTPost);

// update Post
router.put('/:id', PUTPost);

// delete post
router.delete('/:id', DELETEPost);

export default router;
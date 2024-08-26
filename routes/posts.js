import express, { json } from 'express';

const router = express.Router();

let posts = [
    {id: 1, post: 'post 1'},
    {id: 2, post: 'post 2'},
    {id: 3, post: 'post 3'}
]


// GET All Posts /api/posts
router.get('/', (req, res, next) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit))
    }
    res.status(200).json(posts); 
})

// GET single Posts /api/posts/:id
router.get('/:id', (req, res, next ) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`Post with id ${id} not found`);
        error.status = 404;
       return next(error);
    }
    res.status(200).json(post);
})

// Create new post
router.post('/', (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        post: req.body.post
    }
    if (!newPost.post) {
        const error = new Error(`Post not good`);
        error.status = 400;
       return next(error);
    }
    res.status(201).json(posts.push(newPost))
})

// update Post
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`Post with id ${id} not found`);
        error.status = 404;
       return next(error);
    }
    post.post = req.body.post
    res.status(200).json(posts);
})

// delete post
router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`cant delete post with id ${id}: not found`);
        error.status = 404;
       return next(error);
    }
    res.status(200).json(posts.filter((post) => post.id !== id));
})

export default router;
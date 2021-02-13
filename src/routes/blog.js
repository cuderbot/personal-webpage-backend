const { Router } = require('express');

const router = Router();

module.exports = router;

// Get all blog posts
router.get('/', (req, res, next) => {
  try {
    res.json({
      message: 'GET all blog posts',
    });
  } catch (error) {
    next(error);
  }
});

// Get a post by _id or slag
router.get('/:id', (req, res, next) => {
  try {
    res.json({
      message: 'GET a user by _id',
    });
  } catch (error) {
    next(error);
  }
});

// Create a new blog post
router.post('/', (req, res, next) => {
  try {
    res.json({
      message: 'CREATE a blog post',
    });
  } catch (error) {
    next(error);
  }
});

// Update a blog post
router.put('/:id', (req, res, next) => {
  try {
    res.json({
      message: 'UPDATE a blog post',
    });
  } catch (error) {
    next(error);
  }
});

// Delete a blog post
router.delete('/:id', (req, res, next) => {
  try {
    res.json({
      message: 'DELETE a blog post',
    });
  } catch (error) {
    next(error);
  }
});

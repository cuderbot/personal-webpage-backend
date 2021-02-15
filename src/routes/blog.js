const { Router } = require('express');

const { blogCollection } = require('../models');
const { blogValidator } = require('../validators');
const { slugify } = require('../utils');

const router = Router();

module.exports = router;

// Get all blog posts
router.get('/', async (req, res, next) => {
  try {
    const posts = await blogCollection.find();
    res.json({
      data: posts,
    });
  } catch (error) {
    next(error);
  }
});

// Get a post by _id or slag
router.get('/:id', async (req, res, next) => {
  try {
    const post = await blogCollection.findOne({ _id: req.params.id });
    res.json({
      data: post,
    });
  } catch (error) {
    next(error);
  }
});

// Create a new blog post
router.post('/', async (req, res, next) => {
  try {
    const validate = req.body;
    validate.slug = req.body.title ? slugify(req.body.title) : '';

    const value = await blogValidator.validateAsync(validate);
    const postCreated = await blogCollection.insert(value);
    res.json({
      data: postCreated,
    });
  } catch (error) {
    next(error);
  }
});

// Update a blog post
router.put('/:id', async (req, res, next) => {
  try {
    const validate = req.body;
    validate.slug = req.body.title ? slugify(req.body.title) : '';

    const value = await blogValidator.validateAsync(validate);
    const postUpdated = await blogCollection.findOneAndUpdate(
      { _id: req.params.id },
      { $set: value },
    );
    res.json({
      data: postUpdated,
    });
  } catch (error) {
    next(error);
  }
});

// Delete a blog post
router.delete('/:id', async (req, res, next) => {
  try {
    const postDeleted = await blogCollection.findOneAndRemove({
      _id: req.params.id,
    });
    res.json({
      message: postDeleted,
    });
  } catch (error) {
    next(error);
  }
});

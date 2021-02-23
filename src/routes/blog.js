const { Router } = require('express');

const { blogValidator } = require('../validators');
const { blogService } = require('../services');

const router = Router();

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const posts = await blogService.findAll();
    res.json({ data: posts });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await blogService.findById(id);
    res.json({
      data: post,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const postDTO = req.body;
    const value = await blogValidator.createPostValidator.validateAsync(
      postDTO,
    );
    const postCreated = await blogService.create(value);
    res.json({
      data: postCreated,
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const postDTO = req.body;
    postDTO.id = req.params.id;

    const value = await blogValidator.updatePostValidator.validateAsync(
      postDTO,
    );
    const postUpdated = await blogService.update(value);
    res.json({
      data: postUpdated,
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const postDeleted = await blogService.delete(id);
    res.json({
      data: postDeleted,
    });
  } catch (error) {
    next(error);
  }
});

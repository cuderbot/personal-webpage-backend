const { Router } = require('express');

const { userValidator } = require('../validators');

const router = Router();

module.exports = router;

// Get all users
router.get('/', (req, res, next) => {
  try {
    res.json({
      message: 'GET a All users',
    });
  } catch (error) {
    next(error);
  }
});

// Get user by _id
router.get('/:id', (req, res, next) => {
  try {
    res.json({
      message: 'GET a user by _id',
    });
  } catch (error) {
    next(error);
  }
});

// Create a new user
router.post('/', (req, res, next) => {
  try {
    res.json({
      message: 'CREATE a user',
    });
  } catch (error) {
    next(error);
  }
});

// Update a user
router.put('/:id', (req, res, next) => {
  try {
    res.json({
      message: 'UPDATE a user',
    });
  } catch (error) {
    next(error);
  }
});

// Delete a user
router.delete('/:id', (req, res, next) => {
  try {
    res.json({
      message: 'DELETE a user',
    });
  } catch (error) {
    next(error);
  }
});
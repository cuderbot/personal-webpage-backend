const { Router } = require('express');

const router = Router();

module.exports = router;

// Get all users
router.get('/', (req, res, next) => {
  res.json({
    message: 'GET a All users',
  });
});

// Get user by _id
router.get('/:id', (req, res, next) => {
  res.json({
    message: 'GET a user by _id',
  });
});

// Create a new user
router.post('/', (req, res, next) => {
  res.json({
    message: 'CREATE a user',
  });
});

// Update a user
router.put('/:id', (req, res, next) => {
  res.json({
    message: 'UPDATE a user',
  });
});

// Delete a user
router.delete('/:id', (req, res, next) => {
  res.json({
    message: 'DELETE a user',
  });
});

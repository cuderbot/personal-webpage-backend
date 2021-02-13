const { Router } = require('express');

const { userValidator } = require('../validators');
const { userCollection } = require('../models');

const router = Router();

module.exports = router;

// Get all users
router.get('/', async (req, res, next) => {
  try {
    const users = await userCollection.find();
    res.json({ data: users });
  } catch (error) {
    next(error);
  }
});

// Get user by _id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userCollection.findOne({ _id: id });
    console.log(user);
    if (!user) return next();
    return res.json({ data: user });
  } catch (error) {
    next(error);
  }
});

// Create a new user
router.post('/', async (req, res, next) => {
  try {
    await userValidator.validateAsync(req.body);
    const userCreated = await userCollection.insert(req.body);
    res.json({
      data: userCreated,
    });
  } catch (error) {
    next(error);
  }
});

// Update a user
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await userValidator.validateAsync(req.body);
    const userUpdated = await userCollection.findOneAndUpdate(
      { _id: id },
      req.body,
    );
    res.json({
      data: userUpdated,
    });
  } catch (error) {
    next(error);
  }
});

// Delete a user
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDeleted = await userCollection.findOneAndDelete({ _id: id });
    res.json({
      message: 'DELETE a user',
      data: userDeleted,
    });
  } catch (error) {
    next(error);
  }
});

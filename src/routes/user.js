const bcrypt = require('bcryptjs');
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
    const user = await userCollection.findOne({ _id: req.params.id });
    if (!user) {
      return next();
    } else {
      return res.json({ data: user });
    }
  } catch (error) {
    next(error);
  }
});

// Create a new user
router.post('/', async (req, res, next) => {
  try {
    const value = await userValidator.validateAsync(req.body);
    const salt = await bcrypt.genSalt(10);
    value.password = await bcrypt.hash(value.password, salt);
    const userCreated = await userCollection.insert(value);
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
    const value = await userValidator.validateAsync(req.body);
    const userUpdated = await userCollection.findOneAndUpdate(
      { _id: req.params.id },
      { $set: value },
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
    const userDeleted = await userCollection.findOneAndDelete({
      _id: req.params.id,
    });
    res.json({
      data: userDeleted,
    });
  } catch (error) {
    next(error);
  }
});

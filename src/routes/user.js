const { Router } = require('express');

const {
  userValidator: { createUserValidator, updateUserValidator },
} = require('../validators');
const { userService } = require('../services');

const router = Router();

// Get all users
router.get('/', async (req, res, next) => {
  try {
    const users = await userService.findAll();
    res.json({ data: users });
  } catch (error) {
    next(error);
  }
});

// Get user by _id
router.get('/:id', async (req, res, next) => {
  try {
    const user = await userService.findOne({ _id: req.params.id });
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
    const userDTO = req.body;
    const value = await createUserValidator.validateAsync(userDTO);
    const userCreated = await userService.create(value);

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
    const userDTO = req.body;
    const value = await updateUserValidator.validateAsync(userDTO);
    const userUpdated = await userService.update(value);

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

module.exports = router;

const bcrypt = require('bcryptjs');

const { userModel } = require('../models');

exports.findById = (id) => userModel.findById(id).populate().exec();

exports.findAll = () => userModel.find().populate().exec();

exports.create = async (userDTO) => {
  try {
    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userDTO.password, salt);

    // Duplicating object
    const createUser = userDTO;
    createUser.password = hashedPassword;
    createUser.salt = salt;

    const user = new userModel(createUser);
    const userRecord = await user.save();
    // Removing password and salt property before returning
    const userCreated = userRecord.toObject();
    delete userCreated.password;
    delete userCreated.salt;

    return userCreated;
  } catch (error) {
    throw error;
  }
};

exports.update = async (userDTO) => {
  try {
    if (userDTO.password) {
      const salt = await bcrypt.genSalt(10);
      value.password = await bcrypt.hash(value.password, salt);
    }
    const userRecord = await userModel
      .findOneAndUpdate({ _id: userDTO.id }, userDTO)
      .exec();
    return userRecord;
  } catch (error) {
    throw error;
  }
};

exports.delete = (id) => userModel.findOneAndRemove({ _id: id }).exec();

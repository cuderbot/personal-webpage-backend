const { blogModel } = require('../models');

exports.findAll = () => blogModel.find().exec();

exports.findById = (id) => blogModel.findById(id).exec();

exports.create = (userDTO) => {
  const post = new blogModel(userDTO);
  return post.save();
};

exports.update = (userDTO) =>
  blogModel.findByIdAndUpdate(userDTO.id, userDTO).exec();

exports.delete = (id) => blogModel.findByIdAndDelete(id).exec();

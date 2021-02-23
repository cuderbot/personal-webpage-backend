const mongoose = require('mongoose');

const Blog = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'author',
      required: [true, 'Add an author to the post'],
    },
    title: {
      type: String,
      index: true,
      unique: true,
      required: [true, 'Add a title to the post'],
    },
    content: {
      type: String,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'category',
      required: true,
    },
    slug: {
      type: String,
      index: true,
      unique: true,
    },
    tags: {
      type: [String],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('blog', Blog);

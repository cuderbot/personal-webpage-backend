const mongoose = require('mongoose');

const Author = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    lastName: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('author', Author);

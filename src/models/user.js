const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      index: true,
    },
    author: {
      name: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      bio: {
        type: String,
      },
    },
    password: {
      type: String,
      required: true,
      // This option hide the field on querys
      select: false,
    },
    salt: {
      type: String,
      // This option hide the field on querys
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('user', User);

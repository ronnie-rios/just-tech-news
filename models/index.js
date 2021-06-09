const User = require('./User');
const Post = require("./Post");
const bcrypt = require('bcrypt');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });


module.exports = { User };
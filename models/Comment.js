// What needs to be required?
const {Sequalize, Model, DataTypes} = require('sequelize')
const sequelize = require('../config/config')

class Comment extends Model {}

Comment.init(
  // Fill in the missing data
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;

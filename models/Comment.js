// What needs to be required?
const {Sequalize, Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Comment extends Model {}

Comment.init(
  // Fill in the missing data
  {
    id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
	text: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
  },
  {
    sequelize
  }
);

module.exports = Comment;

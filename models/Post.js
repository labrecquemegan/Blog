// What are we missing to be required here?
const {Sequalize, Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')


class Post extends Model {}

Post.init(
  // Finish the post expression
  {
    id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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

module.exports = Post;

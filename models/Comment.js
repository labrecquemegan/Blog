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
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'users',
				key: 'id',
			},
		},
		post_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'posts',
				key: 'id',
			},
		},
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
		modelName: 'comment',
  }
);

module.exports = Comment;

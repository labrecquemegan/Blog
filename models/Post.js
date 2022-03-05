// What are we missing to be required here?
const {Sequalize, Model, DataTypes} = require('sequelize')
const sequelize = require('../config/config')


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
    user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'users',
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
		modelName: 'post',
  }
);

module.exports = Post;

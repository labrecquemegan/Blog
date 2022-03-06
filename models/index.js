//What do we need to require for this document?
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// create relationships
Post.belongsTo(User, {
	foreignKey: 'userId',
});

Comment.belongsTo(User, {
	foreignKey: 'userId',
});

Post.hasMany(Comment, {
	foreignKey: 'post_id',
});

module.exports = {
  User,
  Comment,
  Post
};
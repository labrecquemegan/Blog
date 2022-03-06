const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.render('all-posts', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

// get single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {model: User},
        {
          model: Comment,
          include: {model: User},
        },
      ],
    });

    if (!postData) {
			res.status(404).json({ message: 'No post by that ID' });
		}
		const comments = post.comments;
    const post = postData.get({ plain: true });

    res.render('single-post', { post, comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

// login
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
      }
      res.render('login');
    });

// signup
router.get('/signup', (req, res) => {
    res.render('signup');
});

// dashboard

module.exports = router;

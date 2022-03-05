const router = require('express').Router();
//Require the correct files from the models and authorizations
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  //Create the correct asychronous get route for this function
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

// router.get('/new', withAuth, (req, res) => {
//   // Create the correct get route

// });

router.get('/edit/:id', withAuth, async (req, res) => {
  // Create the correct get route functionality using an asychronous function
  try {
		const postData = await Post.findByPk(req.params.id);
		const post = postData.get({ plain: true });

		res.render('edit-post', { post, logged_in: req.session.logged_in });
	} catch (err) {
		res.status(500).json(err);
	}

});

module.exports = router;

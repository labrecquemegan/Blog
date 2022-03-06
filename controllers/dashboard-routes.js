const router = require('express').Router();
//Require the correct files from the models and authorizations
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  //Create the correct asychronous get route for this function
  try {
    const postData = await Post.findAll({
      where: 
        {
          user_id: req.session.user_id,
        },
      
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.render('all-posts-admin', {
      layout: "dashboard",
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/new', withAuth, (req, res) => {
// Create the correct get route
res.render('new-post', {layout: "dashboard", logged_in: req.session.logged_in})
});

router.get('/edit/:id', withAuth, async (req, res) => {
  // Create the correct get route functionality using an asychronous function
  try {
		const postData = await Post.findByPk(req.params.id);
		const post = postData.get({ plain: true });

		res.render('edit-post', {layout: "dashboard", post, logged_in: req.session.logged_in });
	} catch (err) {
		res.status(500).json(err);
	}

});

module.exports = router;


// router.get('/', withAuth, async (req, res) => {
// 	try {
// 		const userData = await User.findByPk(req.session.user_id, {
// 			attributes: { exclude: ['password'] },
// 			include: [{ model: Post }],
// 		});

// 		const user = userData.get({ plain: true });

// 		res.render('dashboard', {
// 			...user,
// 			logged_in: req.session.logged_in,
// 		});
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });

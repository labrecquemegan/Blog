const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
    try {
        if (!req.session.logged_in) {
          res.redirect('/login');
          return;
        }
        // USER INFO
        const userData = await User.findByPk(req.session.user_id, {
          attributes: {exclude: ['password']},
        });
        const user = userData.get({plain: true});
        res.render('all-posts', {
            user,
            logged_in: req.session.logged_in,
          });
        } catch (err) {
          res.status(500).json(err);
        }
});

// get single post
router.get('/post/:id', async (req, res) => {
 
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
      }
      res.render('login');
    });

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;

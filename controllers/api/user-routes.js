const router = require('express').Router();
//Require the correct files from the models
const { User } = require('../../models');

router.post('/', async (req, res) => {
  // Create the correct asychronous function for this login post request with error handling
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });

    res.status(200).json(userData);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login function
router.post('/login', async (req, res) => {
  // Create the correct asychronous function for this login post request with error handling
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.email,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// logout
router.post('/logout', (req, res) => {
  // Create the correct functionality for this post request with error handling
  try {
  
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }

} catch (err) {
  res.status(404).end();
}
});

module.exports = router;

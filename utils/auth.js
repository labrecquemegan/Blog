const withAuth = (req, res, next) => {
  // What functionality are we missing?
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;

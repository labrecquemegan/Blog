const router = require('express').Router();

//Create the api routes and require them to use them within the controllers
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

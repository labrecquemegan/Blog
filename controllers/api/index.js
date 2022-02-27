const router = require('express').Router();

//Require the correct files into the api folder

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');


//Create the router.use functionality for each required file
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
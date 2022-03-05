const router = require('express').Router();

//Require the correct files into the api folder
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');


//Create the router.use functionality for each required file
router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes)

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
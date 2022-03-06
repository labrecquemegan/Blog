const router = require('express').Router();

//Require the correct files into the api folder
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');


//Create the router.use functionality for each required file
router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes)

module.exports = router;
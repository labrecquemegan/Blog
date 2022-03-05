const router = require('express').Router();
//Require the correct files from the models and authorizations
const withAuth = require('../../utils/auth');
const { Post } = require('../../models');

router.get('/', async (req, res) => {
  // finds all posts
	const postData = await Post.findAll();

	res.status(200).json(postData);
});

router.post('/', withAuth, async (req, res) => {
//Complete the asychronous function with error handling
// create a post
try {
  const newPost = await Post.create({
    ...req.body,
    user_id: req.session.user_id,
  });

  res.status(200).json(newPost);
} catch (err) {
  res.status(400).json(err);
}
});

router.put('/:id', withAuth, async (req, res) => {
//Complete the asychronous function with error handling
// updates a post
try {
  let updatedPost = await Post.update(req.body, {
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
  });

  if (!updatedPost) {
    res.status(404).json({ message: 'No post found with that ID' });
    return;
  }

  res.status(200).json(updatedPost);
} catch (err) {
  res.status(500).json(err);
}
});

router.delete('/:id', withAuth, async (req, res) => {
  //Complete the asychronous function with error handling
  // delete the post
  try {
		const postData = await Post.destroy({
			where: {
				id: req.params.id,
				user_id: req.session.user_id,
			},
		});

		if (!postData) {
			res.status(404).json({ message: 'No post found with that ID' });
			return;
		}

		res.status(200).json(postData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

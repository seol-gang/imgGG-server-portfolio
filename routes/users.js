const express = require('express');
const router = express.Router();

const { usersController } = require('../controller');

router.post('/signin', usersController.signin.post);
router.post('/signup', usersController.signup.post);
router.post('/changepw', usersController.passwordChange.post);
router.post('/changeprofile', usersController.profileChange.post);
router.post('/signout', usersController.signout.post);

router.get('/info', usersController.info.get);
router.get('/userlike', usersController.userLikeImage.get);


module.exports = router;

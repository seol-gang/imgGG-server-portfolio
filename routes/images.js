const express = require('express');
const router = express.Router();

const { imagesController } = require('../controller');

router.post('/post', imagesController.imagePost.post);
router.post('/search/recently', imagesController.imageRecentlySearch.post);
router.post('/search/like', imagesController.imageLikeSearch.post);
router.post('/like', imagesController.imageLike.post);

router.get('/info/:id', imagesController.imageInfo.get);
router.get('/tags', imagesController.getAllTags.get);

module.exports = router;

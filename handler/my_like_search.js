const {tag, user} = require("../models");

module.exports.myLikeSearch = ({userId}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userPost = await user.findOne({
        where: {id: userId}
      });
      let post = await userPost.getImages();
      resolve(post);
    } catch(err) {
      reject(err);
    }
  });
}
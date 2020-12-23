const {image, tag, user, user_like} = require("../models");


module.exports.imageInfo = ({userId, imageId}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await image.findOne({
        where: {id: imageId},
        include: [{
          model: tag
        }]
      })
      
      const postUser = await user.findOne({
        where: {
          id: post.userId
        },
        attributes: {
          exclude: ['password', 'phone_number', 'updatedAt']
        }
      })

      let postJson = post.toJSON();
      let postUserJson = postUser.toJSON();

      if(userId) {
        let isLike = await user_like.findOne({
          where: {
            userId: userId,
            imageId: imageId
          }
        });
        if(isLike) {
          postUserJson["user_like"] = isLike.toJSON();
        }
      }
      postJson["user"] = postUserJson;
      resolve(postJson);
    } catch(err) {
      reject(err);
    }
  });
}
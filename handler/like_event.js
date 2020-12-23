const {image, user_like} = require("../models");

module.exports.likeEvent = ({userId, imageId}) => {
  return new Promise((resolve, reject) => {
    user_like.findOrCreate({
      where: {
        userId: userId,
        imageId: imageId
      },
    }).then(([result, created]) => {
      if(!created) {
        user_like.destroy({
          where: {
            userId: userId,
            imageId: imageId
          }}).then(() => {
            image.findOne({
              where: { id: imageId }
            }).then(img => img.decrement('like_count', {by: 1}))
            .then(beforeRenewalData => beforeRenewalData.reload())
            .then(data => resolve(data))
            .catch(err => reject(err));
          }).catch(err => reject(err));
      } else {
        image.findOne({
          where: { id: imageId }
        }).then(img => img.increment('like_count', {by: 1}))
        .then(beforeRenewalData => beforeRenewalData.reload())
        .then(data => resolve(data))
        .catch(err => reject(err));
      }
    }).catch(err => reject(err));
  });
}
const {user} = require("../models");

module.exports.profileChange = ({userId, url}) => {
  return new Promise((resolve, reject) => {
    user.update({user_image_url: url}, {
      where: {
        id: userId
      }
    }).then(data => resolve(data)) // 1 : update success 0 : update fail
    .catch(err => reject(err));
  });
}
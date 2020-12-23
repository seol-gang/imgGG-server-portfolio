const {user} = require("../models");

module.exports.passwordChange = ({userId, oldPassword, newPassword}) => {
  return new Promise((resolve, reject) => {
    user.update({password: newPassword}, {
      where: {
        password: oldPassword,
        id: userId
      }
    }).then(data => resolve(data)) // 1 : update success 0 : update fail
    .catch(err => reject(err));
  });
}
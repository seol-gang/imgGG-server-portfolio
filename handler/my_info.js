const {user} = require("../models");

module.exports.myInfo = ({userId}) => {
  return new Promise((resolve, reject) => {
    user.findByPk(userId)
    .then(data => resolve(data))
    .catch(err => reject(err));
  });
}
const {user} = require("../models");

module.exports.findUser = ({email, password}) => {
  return new Promise((resolve, reject) => {
    user.findOne({
      where: {
        email: email,
        password: password
      }
    }).then(data => {
      if(!data) {
        reject(false);
      } else {
        resolve(data);
      }
    }).catch(err => reject(err));
  });
}
const {user} = require("../models");

module.exports.createUser = ({email, username, password, phone_number}) => {
  return new Promise((resolve, reject) => {
    user.findOrCreate({
      where: {
        email: email
      },
      defaults: {
        username: username,
        password: password,
        phone_number: phone_number
      }
    }).then(([data, created]) => {
      if(!created) {
        reject(false);
      } else {
        resolve(data);
      }
    }).catch(err => reject(err));
  });
}
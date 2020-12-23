const {tag} = require("../models");

module.exports.getAllTags = () => {
  return new Promise(async (resolve, reject) => {
    tag.findAll()
    .then(data => resolve(data))
    .catch(err => reject(err));
  });
}
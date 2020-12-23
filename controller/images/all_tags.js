const { getAllTags } = require("../../handler/all_tags");

module.exports = {
  get: (req, res) => {
    getAllTags()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send("ServerError"));
  }
}
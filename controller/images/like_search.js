const { searchByLike } = require("../../handler/like_search");
const jwt = require("jsonwebtoken");

module.exports = {
  post: (req, res) => {
    searchByLike(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).send("Server Error");
    })
  }
}
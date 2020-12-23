const { searchByRecently } = require("../../handler/recently_search");
const jwt = require("jsonwebtoken");

module.exports = {
  post: (req, res) => {
    searchByRecently(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Server Error");
    })
  }
}
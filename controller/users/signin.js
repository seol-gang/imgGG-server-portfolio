const { findUser } = require("../../handler/signin");
const jwt = require("jsonwebtoken");

module.exports = {
  post: (req, res) => {
    findUser(req.body)
    .then(data => {
      let token = jwt.sign({
        userId: data.id
      }, process.env.JWT_TOKEN);
      res.status(200).json({
        token: token
      });
    })
    .catch(err => {
      if(err === false) {
        res.status(404).send("Unvalid User");
      } else {
        res.status(500).send("Server Error");
      }
    })
  }
}
const { passwordChange } = require("../../handler/password_change");
const jwt = require("jsonwebtoken");

module.exports = {
  post: (req, res) => {
    let sessionInfo = jwt.verify(req.headers["token"], process.env.JWT_TOKEN);
    if(sessionInfo) {
      passwordChange({userId: sessionInfo.userId, ...req.body})
      .then(data => {
        if(data[0]) {
          res.status(200).send("Success Password Change!");
        } else {
          res.status(404).send("Fail Password Change!");
        }
      })
      .catch(err => res.status(500).send("Server Error"));
    } else {
      res.status(401).send("Can't SingIn");      
    }
  }
}
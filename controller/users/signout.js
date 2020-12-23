const jwt = require("jsonwebtoken");

module.exports = {
  post: (req, res) => {
    let sessionInfo = jwt.verify(req.cookies.token, process.env.JWT_TOKEN);
    if(sessionInfo) {
      res.clearCookie('token', {path: "/"});
      res.status(200).send();
    } else {
      res.status(401).send("Can't SignIn");
    }
  }
}
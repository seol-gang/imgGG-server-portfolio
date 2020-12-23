const { postImage } = require("../../handler/post_image");
const jwt = require("jsonwebtoken");

module.exports = {
  post: (req, res) => {
    let sessionInfo = jwt.verify(req.headers["token"], process.env.JWT_TOKEN);
    if(sessionInfo) {
      postImage({userId: sessionInfo.userId, ...req.body})
      .then(data => {
        res.redirect(301, `/image/info/${data.id}`);
      })
      .catch(err => {
        res.status(500).send("Server Error");
      })
    } else {
      res.status(401).send("Can't SignIn");
    }
  }
}
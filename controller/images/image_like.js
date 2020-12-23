const { likeEvent } = require("../../handler/like_event");
const jwt = require("jsonwebtoken");

module.exports = {
  post: (req, res) => {
    let sessionInfo = jwt.verify(req.headers["token"], process.env.JWT_TOKEN);
    if(sessionInfo) {
      likeEvent({userId: sessionInfo.userId, imageId: req.body.imageId})
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).send("Server Error"))
    } else {
      res.status(401).send("Can't SignIn");
    }
  }
}
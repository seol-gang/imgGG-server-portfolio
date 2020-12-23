const { myInfo } = require("../../handler/my_info");
const jwt = require("jsonwebtoken");

module.exports = {
  get: (req, res) => {
    let sessionInfo = jwt.verify(req.headers["token"], process.env.JWT_TOKEN);
    if(sessionInfo) {
      myInfo({userId: sessionInfo.userId})
      .then(data => {
        res.status(200).json({
          id: data.id,
          email: data.email,
          username: data.username,
          url: data.user_image_url
        })
      })
      .catch(err => res.status(500).send("Server Error"));
    } else {
      res.status(401).send("Can't SignIn");
    }
  }
}
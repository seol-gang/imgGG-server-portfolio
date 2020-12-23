const { myLikeSearch } = require("../../handler/my_like_search");
const jwt = require("jsonwebtoken");

module.exports = {
  get: (req, res) => {
    let sessionInfo = jwt.verify(req.headers["token"], process.env.JWT_TOKEN);
    if(sessionInfo) {
      myLikeSearch({userId: sessionInfo.userId})
      .then(data => {
        let sendData = data.map(post => {
          return {
            id: post.id,
            image_url: post.image_url
          }
        });
        res.status(200).json({results: sendData});
      })
      .catch(err => res.status(500).send("Server Error"))
    } else {
      res.status(401).send("Can't SignIn");
    }
  }
}
const { imageInfo } = require("../../handler/image_info");
const jwt = require("jsonwebtoken");

module.exports = {
  get: (req, res) => {
    let sessionInfo;
    try {
      sessionInfo = jwt.verify(req.headers["token"], process.env.JWT_TOKEN);
    } catch {}
    imageInfo({userId: sessionInfo ? sessionInfo.userId : null, imageId: req.params.id})
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Server Error");
    })
  }
}
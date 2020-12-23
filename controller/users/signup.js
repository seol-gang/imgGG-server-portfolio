const { createUser } = require('../../handler/signup');

module.exports = {
  post: (req, res) => {
    createUser(req.body)
    .then(() => {
      res.status(200).send("Success Signup");
    }).catch(err => {
      if(err === false) {
        res.status(409).send("Already exists user");
      } else {
        res.status(500).send("Server Error");
      }
    });
  }
};

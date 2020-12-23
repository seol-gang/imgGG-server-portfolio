const {image, tag} = require("../models");

module.exports.postImage = ({userId, url, tags}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await image.create({
        image_url: url,
        userId: userId
      });
      if(tags) {
        const result = await Promise.all(tags.map(elem => tag.findOrCreate({
          where: {
            tag_name: elem
          }
        })));
        await post.addTags(result.map(r => r[0]));
      }  
      resolve(post);
    } catch (err) {
      reject(err);
    }
  });
}
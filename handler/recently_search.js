const {image, tag, user} = require("../models");

module.exports.searchByRecently = ({searchWord, userId}) => {
  return new Promise(async (resolve, reject) => {
    let isWord = searchWord ? {tag_name: searchWord} : {};
    if(!userId) {
      if(isWord.tag_name) {
        try {
          const hashtag = await tag.findOne({
            where: isWord
          });
          let post;
          if(hashtag) {
            post = await hashtag.getImages({
              order: [['id', 'DESC']],
            })
          }
          resolve(post);
        } catch (err) {
          reject(err);
        }
      } else {
        image.findAll({
          order: [['id', 'DESC']]
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
      }
    } else {    
      user.findOne({
        where: {id: userId},
        include: [{
          model: image,
          include: [{
            required: false,
            model:tag,
            where: isWord,
          }],
        }],
        order: [[image, 'id', 'DESC']]
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
    }
  });
}
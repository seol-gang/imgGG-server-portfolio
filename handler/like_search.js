const {image, tag, user} = require("../models");

module.exports.searchByLike = ({searchWord, userId}) => {
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
              order: [['like_count', 'DESC']],
            })
          }
          resolve(post);
        } catch (err) {
          reject(err);
        }
      } else {
        image.findAll({
          order: [['like_count', 'DESC']]
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
            model:tag,
            where: isWord,
          }],
        }],
        order: [[image, 'like_count', 'DESC']]
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
    }
  });
}
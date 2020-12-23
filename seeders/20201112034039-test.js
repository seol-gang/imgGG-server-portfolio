'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   let data = [];
   for(let i = 0; i < 3; i++) {
    let obj = {
      email:"test" + i + "@test" + i + ".com",
      username: "test" + i,
      password: "test" + i,
      phone_number: `010-${i}${i}${i}${i}-${i}${i}${i}${i}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    data.push(obj);
   }
   await queryInterface.bulkInsert('users', data, {});
   await queryInterface.bulkInsert('images', [
     {
      image_url: "https://google.co.kr",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      image_url: "https://google.com",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      image_url: "https://naver.com",
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      image_url: "https://cafe.naver.com",
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      image_url: "https://cafe.naver.com",
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      image_url: "https://e.kakao.com",
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
   ], {});
   await queryInterface.bulkInsert('tags', [
     {
       tag_name: "구글",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      tag_name: "google",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tag_name: "네이버",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tag_name: "카페",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tag_name: "이모티콘",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tag_name: "카카오",
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {});
   await queryInterface.bulkInsert('img_tags', [
     {
       imageId: 1,
       tagId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      imageId: 1,
      tagId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      imageId: 2,
      tagId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      imageId: 2,
      tagId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      imageId: 3,
      tagId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      imageId: 4,
      tagId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      imageId: 5,
      tagId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      imageId: 5,
      tagId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
     },
   ], {});
   await queryInterface.bulkInsert('user_likes', [
     {
       imageId: 1,
       userId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      imageId: 2,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      imageId: 3,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      imageId: 4,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('img_tags', null, {});
    await queryInterface.bulkDelete('images', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};

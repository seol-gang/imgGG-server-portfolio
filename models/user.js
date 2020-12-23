'use strict';
const {
  Model
} = require('sequelize');

const crypto = require("crypto");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsToMany(models.image, {through: models.user_like});
      user.hasMany(models.user_like);
      user.hasMany(models.image, {
        foreignKey: "userId",
        sourceKey: "id"
      });
    }
  };
  user.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    user_image_url: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (data, option) => {
        let hash = crypto.createHmac('sha256', process.env.CRYPTO_KEY);
        hash.update(data.password);
        data.password = hash.digest('hex');
      },
      beforeFind: (data, option) => {
        let hash = crypto.createHmac('sha256', process.env.CRYPTO_KEY);
        if(data.defaults) {
          hash.update(data.defaults.password);
          data.defaults.password = hash.digest('hex');
        } else {
          if(!data.where.password) return;
          hash.update(data.where.password);
          data.where.password = hash.digest('hex');
        }
      },
      beforeBulkUpdate: (data, option) => {
        if(data.attributes.password) {
          let newPwHash = crypto.createHmac('sha256', process.env.CRYPTO_KEY);
          let oldPwHash = crypto.createHmac('sha256', process.env.CRYPTO_KEY);
          oldPwHash.update(data.where.password);
          data.where.password = oldPwHash.digest('hex');
          newPwHash.update(data.attributes.password);
          data.attributes.password = newPwHash.digest('hex');
        }
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};
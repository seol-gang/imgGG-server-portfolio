'use strict';
const {
  Model
} = require('sequelize');

const {user, image} = require("../models");
module.exports = (sequelize, DataTypes) => {
  class user_like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_like.belongsTo(models.user);
      user_like.belongsTo(models.image);
    }
  };
  user_like.init({
    userId: {
      type: DataTypes.INTEGER,
    },
    imageId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'user_like',
  });
  return user_like;
};
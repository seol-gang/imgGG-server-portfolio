'use strict';
const {
  Model
} = require('sequelize');

const {image, tag} = require("../models");
module.exports = (sequelize, DataTypes) => {
  class img_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  img_tag.init({
    imageId: {
      type: DataTypes.INTEGER,
    },
    tagId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'img_tag',
  });
  return img_tag;
};
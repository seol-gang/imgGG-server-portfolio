'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      image.belongsToMany(models.user, {through: models.user_like});
      image.hasMany(models.user_like);
      image.belongsToMany(models.tag, {through: models.img_tag});
      image.belongsTo(models.user, {
        foreignKey: "userId",
        targetKey: "id"
      });
    }
  };
  image.init({
    image_url: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    like_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'image',
  });
  return image;
};
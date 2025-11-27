'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Movie, {
        foreignKey: "actorId",
        through: "MovieActors"
      })
    }
  }
  Actor.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [2, 30] }
    },
    nationality: {
      type: DataTypes.STRING,
      validate: { len: [2, 30] }
    },
    birthYear: {
      type: DataTypes.INTEGER,
      validate: { isNumeric: true, isInt: true }
    },
    birthPlace: {
      type: DataTypes.STRING,
      validate: { len: [2, 30] }
    },
    notableAwards: DataTypes.JSON,
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Actor',
  });
  return Actor;
};
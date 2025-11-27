'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Director, {
        foreignKey: "directorId"
      })

      this.belongsToMany(models.Genre, {
        foreignKey: "movieId",
        through: "MovieGenres"
      })
      
      this.belongsToMany(models.Actor, {
        foreignKey: "movieId",
        through: "MovieActors"
      })
    }
  }
  Movie.init({
    imdbID: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    releaseYear: DataTypes.INTEGER,
    directorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: DataTypes.FLOAT,
    language: DataTypes.STRING,
    country: DataTypes.STRING,
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};
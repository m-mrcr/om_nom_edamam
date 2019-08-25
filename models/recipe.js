'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    cookTime: DataTypes.INTEGER,
    caloriesPerServing: DataTypes.INTEGER,
    servingAmount: DataTypes.INTEGER,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    healthDetails: DataTypes.STRING,
    ingredients: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};
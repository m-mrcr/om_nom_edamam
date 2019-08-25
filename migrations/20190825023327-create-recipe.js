'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      cookTime: {
        type: Sequelize.INTEGER
      },
      caloriesPerServing: {
        type: Sequelize.INTEGER
      },
      servingAmount: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.TEXT
      },
      url: {
        type: Sequelize.TEXT
      },
      healthDetails: {
        type: Sequelize.TEXT
      },
      ingredients: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipes');
  }
};

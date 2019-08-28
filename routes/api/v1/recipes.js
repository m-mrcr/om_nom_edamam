var express = require('express');
var router = express.Router();
var Recipe = require('../../../models').Recipe;
var Sequelize = require('sequelize');
var fetch = require('node-fetch');
require('dotenv').config();
const Op = Sequelize.Op

router.get('/food_search', function(req,res) {
  var foodType = req.query.q;
  var capitalizedFoodType = foodType.charAt(0).toUpperCase() + foodType.slice(1);
  Recipe.findAll({where: {title: {[Op.substring]: `${capitalizedFoodType}`}}})
  .then(recipes => {
    if (recipes[1].rowCount == 0) {
      fetch(`https://api.edamam.com/search?q=${foodType}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`, {compress: true, headers: {"Accept-Encoding": "gzip"}})
      .then(res => res.json())
      .then(json => {
        return json.hits })
      .then(edamamData => {
        var formatData = []
         edamamData.forEach(function(element) {
          var servingCalories = element.recipe.calories / element.recipe.yield
          var e = {
            title: element.recipe.label,
            cookTime: element.recipe.totalTime,
            caloriesPerServing: parseInt(servingCalories),
            servingAmount: element.recipe.yield,
            image: element.recipe.image,
            url: element.recipe.url,
            healthDetails: JSON.stringify(element.recipe.healthLabels),
            ingredients: JSON.stringify(element.recipe.ingredientLines)
          }
          formatData.push(e)
        })
        return formatData
      })
      .then(formattedData => {
        return Recipe.bulkCreate(formattedData)
      })
      .then(created => {
        res.setHeader("Content-Type", "application/json");
        res.status(201).send(JSON.stringify(created));
      })
      .catch(error => {
        res.setHeader("Content-Type", "application/json");
        res.status(500).send({error});
      });
    } else {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(recipes));
    }})
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error});
  });
});

module.exports = router;

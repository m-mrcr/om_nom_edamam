var express = require('express');
var router = express.Router();
var Recipe = require('../../../models').Recipe;
var Sequelize = require('sequelize');
var sequelize = new Sequelize('om_nom_edamam_development', "", null, {host: 'localhost', dialect: 'postgres'});
var fetch = require('node-fetch');
require('dotenv').config();

router.get('/food_search', function(req,res) {
  var foodType = req.query.q;
  sequelize.query('SELECT * FROM "Recipes" WHERE "title" ILIKE ?', {raw: true, replacements: [`%${foodType}%`]})
  .then(recipes => {
    if (recipes[1].rowCount == 0) {
      // fetch(`https://api.edamam.com/search?q=${foodType}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}, {compress: true, headers: {"Accept-Encoding": "gzip"}}`)
      fetch(`https://api.edamam.com/search?q=${foodType}&app_id=02463f36&app_key=4787d094f95af4ea067a8df3757c3e2d`, {compress: true, headers: {"Accept-Encoding": "gzip"}})
      .then(res => res.json())
      .then(json => {
        var edamamData = json.hits;
        edamamData.forEach(function(element) {
          var servingCalories = element.recipe.calories / element.recipe.yield
          Recipe.create({
            title: element.recipe.title,
            cookTime: element.recipe.cookTime,
            caloriesPerServing: parseInt(servingCalories),
            servingAmount: element.recipe.yield,
            image: element.recipe.image,
            url: element.recipe.url,
            healthDetails: JSON.stringify(element.recipe.healthLabels),
            ingredients: JSON.stringify(element.recipe.ingredientLines)
          })
        })
      })
      .then(updatedData => {
        return sequelize.query('SELECT * FROM "Recipes" WHERE "title" ILIKE ?', {raw: true, replacements: [`%${foodType}%`]})
      })
      .then(returnData => {
        return console.log(returnData);
        // res.setHeader("Content-Type", "application/json");
        // res.status(200).send(JSON.stringify(returnData));
      })
      .catch(error => {
        res.setHeader("Content-Type", "application/json");
        res.status(500).send({error});
      });
    } else {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(recipes[0]));
    }})
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error});
  });
});

module.exports = router;

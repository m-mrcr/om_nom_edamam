var express = require('express');
var router = express.Router();
var Recipe = require('../../../models').Recipe;
var Sequelize = require('sequelize');
var sequelize = new Sequelize('om_nom_edamam_development', "", null, {host: 'localhost', dialect: 'postgres'});

router.get('/food_search', function(req,res) {
  var foodType = req.query.q;
  console.log(foodType);
sequelize.query('SELECT * FROM "Recipes" WHERE "title" ILIKE ?', {raw: true, replacements: [`%${foodType}%`]})
  .then(recipes => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(recipes[0]));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error});
  });
});

module.exports = router;

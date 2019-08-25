var express = require('express');
var router = express.Router();
var Recipe = require('../../../models').Recipe;

router.get('/food_search', function(req,res) {
Recipe.findAll({where: {title: {[Op.iLike]: '%chicken'}}})
  .then(recipes => {
    console.log(recipes);
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error})
  });
});

module.exports = router;

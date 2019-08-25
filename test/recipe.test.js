var request = require('supertest');
var app = require('../app');
var shell = require('shelljs');
var express = require('express');
var test = express();
var Recipe = require("../models").Recipe

describe('Recipe', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create');
  });
  beforeEach(() => {
    shell.exec('npx sequelize db:migrate');
    shell.exec('npx sequelize db:seed:all');
  });
  afterEach(() => {
    shell.exec('npx sequelize db:migrate:undo:all')
  });

  it('GET recipes for a food type', () => {
    return request(app)
    .get('/api/v1/recipes/food_search?q=chocolate')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      console.log(response.body)
    })
    console.log('hello');
  });
});

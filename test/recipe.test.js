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
    .get('/api/v1/recipes/food_search?q=pear')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.body.length).toBe(10)
      expect(Object.keys(response.body[0])).toContain('title')
      expect(Object.keys(response.body[0])).toContain('cookTime')
      expect(Object.keys(response.body[0])).toContain('caloriesPerServing')
      expect(Object.keys(response.body[0])).toContain('servingAmount')
      expect(Object.keys(response.body[0])).toContain('image')
      expect(Object.keys(response.body[0])).toContain('url')
      expect(Object.keys(response.body[0])).toContain('healthDetails')
      expect(Object.keys(response.body[0])).toContain('ingredients')
    })
  });

  fit('GET recipes for a food type - SADPATH', () => {
    return request(app)
    .get('/api/v1/recipes/food_search?q=')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(500)
    })
  });

  it('GET recipes for range of calories', () => {
    return request(app)
    .get('/api/v1/recipes/calorie_search?q=150-300')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.body.length).toBe(16)
      expect(Object.keys(response.body[0])).toContain('title')
      expect(Object.keys(response.body[0])).toContain('cookTime')
      expect(Object.keys(response.body[0])).toContain('caloriesPerServing')
      expect(Object.keys(response.body[0])).toContain('servingAmount')
      expect(Object.keys(response.body[0])).toContain('image')
      expect(Object.keys(response.body[0])).toContain('url')
      expect(Object.keys(response.body[0])).toContain('healthDetails')
      expect(Object.keys(response.body[0])).toContain('ingredients')
    })
  });

  it('GET recipes for range of calories - SADPATH', () => {
    return request(app)
    .get('/api/v1/recipes/calorie_search?q=150')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(500)
    })
  });
});

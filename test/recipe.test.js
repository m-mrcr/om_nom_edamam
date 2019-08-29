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

  it('GET recipes for a food type - IN DB', () => {
    return request(app)
    .get('/api/v1/recipes/food_search?q=beef')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.body.length).toBe(5)
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

  it('GET recipes for a food type - NOT IN DB', () => {
    return request(app)
    .get('/api/v1/recipes/food_search?q=pear')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(201)
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

  it('GET recipes for a food type - IN DB - SADPATH', () => {
    return request(app)
    .get('/api/v1/recipes/food_search?q=[]')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(500)
    })
  });

  it('GET recipes for a food type - NOT IN DB - SADPATH', () => {
    return request(app)
    .get('/api/v1/recipes/food_search?')
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
      expect(response.statusCode).toBe(200)
      expect(response.body.length).toBe(6)
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
    .get('/api/v1/recipes/calorie_search?q=')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(500)
    })
  });

  it('GET recipes pertaining to specific health concern', () => {
    return request(app)
    .get('/api/v1/recipes/health_search?q=peanut-free')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(response.body.length).toBe(14)
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

  it('GET recipes for a food type sorted by preparation time', () => {
    return request(app)
    .get('/api/v1/recipes/time_sort?q=beef')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(response.body.length).toBe(5)
      expect(response.body[0].cookTime).toBeLessThanOrEqual(response.body[1].cookTime)
    })
  });

  // THIS TEST PASSES IN ALL OTHER ARENAS OTHER THAN ON TRAVIS CI
  // INCLUDING NPM TEST, LOCAL ON POSTMAN, AND HEROKU ON POSTMAN

  it('GET recipes for a food type sorted by preparation time - NOT IN DB', () => {
    return request(app)
    .get('/api/v1/recipes/time_sort?q=pear')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      (response.body[1].cookTime)
      expect(response.statusCode).toBe(201)
      expect(response.body.length).toBe(10)
      expect(response.body[0].cookTime).toBeLessThanOrEqual(response.body[1].cookTime)
    })
  });

  it('GET recipes for a food type sorted by preparation time - IN DB - SADPATH', () => {
    return request(app)
    .get('/api/v1/recipes/time_sort?q=[]')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(500)
    })
  });

  it('GET recipes for a food type sorted by preparation time - NOT IN DB - SADPATH', () => {
    return request(app)
    .get('/api/v1/recipes/time_sort?')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(500)
    })
  });

  it('GET recipes for a food type sorted by calories per serving', () => {
    return request(app)
    .get('/api/v1/recipes/calorie_sort?q=beef')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(200)
      expect(response.body.length).toBe(5)
      expect(response.body[0].caloriesPerServing).toBeLessThanOrEqual(response.body[1].caloriesPerServing)
    })
  });

  // THIS TEST PASSES IN ALL OTHER ARENAS OTHER THAN ON TRAVIS CI
  // INCLUDING NPM TEST, LOCAL ON POSTMAN, AND HEROKU ON POSTMAN

  it('GET recipes for a food type sorted by calories per serving - NOT IN DB', () => {
    return request(app)
    .get('/api/v1/recipes/calorie_sort?q=pear')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(201)
      expect(response.body.length).toBe(10)
      expect(response.body[0].caloriesPerServing).toBeLessThanOrEqual(response.body[1].caloriesPerServing)
    })
  });

  it('GET recipes for a food type sorted by calories per serving - IN DB - SADPATH', () => {
    return request(app)
    .get('/api/v1/recipes/calorie_sort?q=[]')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(500)
    })
  });

  it('GET recipes for a food type sorted by calories per serving - NOT IN DB - SADPATH', () => {
    return request(app)
    .get('/api/v1/recipes/calorie_sort?')
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .then(response => {
      expect(response.statusCode).toBe(500)
    })
  });

});

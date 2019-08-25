var request = require('supertest');
var app = require('../app');
var shell = require('shelljs');
var express = require('express');
var test = express();

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

  it('prints out hello', () => {
    console.log('hello');
  });
});

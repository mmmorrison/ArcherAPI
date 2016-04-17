var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

function Seasons() {
  return knex('seasons');
};

function Episodes() {
  return knex('episodes')
};

function Guests() {
  return knex('guests');
};

function references() {
  return knex('references')
};

function Tropes() {
  return knex('tropes')
}

router.get('/', function(req, res, next) {
  Episodes().select().then(function(results) {
    res.json(results);
  })
});


module.exports = router;

'use strict';

var express = require('express');
var moodModel = require('../models/mood');

var router = express.Router();

router.get('/', function moodInfo(req, res) {
  moodModel.getAll (function moodData(err, data) {
    if (err) {
      console.error(err);
      res.status(500).send("I dont know what is wrong with the server...");
      return;
    }
    res.json(data);
  });
});
const express = require('express');
const router = express.Router();

const timeController = require('./time/controller');
router.get('/now',timeController.now);

const arrayController = require('./array/controller');
router.post('/sort',arrayController.sort);

const weatherController = require('./weather/controller');
router.get('/weather',weatherController.weatherByCity);
router.get('/weather/test',weatherController.test);

module.exports = router;
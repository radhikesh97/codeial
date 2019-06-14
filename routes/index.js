const express = require('express');

const router = express.Router();

const homeController = require('../contollers/home_controller');

console.log('Router started');

router.use('/users',require('./users'));

router.get('/',homeController.home);


module.exports = router;
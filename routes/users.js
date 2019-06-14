const express = require('express');

const router = express.Router();

const userConroller = require('../contollers/users_controller');

router.get('/profile',userConroller.profile);

module.exports = router;
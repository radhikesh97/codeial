const express = require('express');

const router = express.Router();

const userConroller = require('../contollers/users_controller');

router.get('/profile',userConroller.profile);
router.get('/sign-up',userConroller.sign_up);
router.get('/sign-in',userConroller.sign_in);
router.post('/create',userConroller.create);
router.post('/create-session',userConroller.createSession);
router.get('/sign-out',userConroller.sign_out);
module.exports = router;
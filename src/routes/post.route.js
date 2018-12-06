'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/post.controller');


router.post('/create',  controller.post);


module.exports = router;
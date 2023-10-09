const express = require('express')
const router = express.Router();
// const mongoose = require('mongoose')
const db = require('../model/db');
const { Register } = require('../controller');


router.get('/', Register)

router.post('/', Register)
  
  module.exports = router;


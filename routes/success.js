const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const productsController = require('../controllers/product');

const success = express.Router();

success.post('/success', productsController.getSuccess)

module.exports = success;
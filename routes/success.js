const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const success = express.Router();

success.post('/success', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
})

module.exports = success;
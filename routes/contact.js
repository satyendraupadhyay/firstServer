const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const contact = express.Router();

contact.get('/contactus', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
})

module.exports = contact;
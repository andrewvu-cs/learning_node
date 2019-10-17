const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// get ueses exact match
router.get("/", (req, res, next) => {
      res.sendFile(path.join(rootDir, 'views', 'shop.html')); // send sets the header for us 'text/html'
    });

module.exports = router;
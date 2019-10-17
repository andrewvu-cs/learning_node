const express = require('express');

const router = express.Router();

// get ueses exact match
router.get("/", (req, res, next) => {
      console.log("In another middleware!");
      res.send("<h1>Hello from Express!</h1>"); // send sets the header for us 'text/html'
    });

module.exports = router;
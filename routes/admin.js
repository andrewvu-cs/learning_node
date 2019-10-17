// Core nodejs module
const path = require('path');

// Third party node module
const express = require("express");

const router = express.Router();

// admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')) // send sets the header for us 'text/html'
});

// admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;

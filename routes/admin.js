// Core nodejs module
const path = require("path");

// Third party node module
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // console.log("In another middleware!");
  // res.sendFile(path.join(rootDir, "views", "add-product.html")); // send sets the header for us 'text/html'
  res.render("add-product", {docTitle: "Add Product"})
});

// admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;

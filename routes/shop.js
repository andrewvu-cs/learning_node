const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

// get ueses exact match
router.get("/", (req, res, next) => {
  // console.log('shop.js', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // send sets the header for us 'text/html'
  const products = adminData.products;
  // PUG
  res.render("shop", { prods: products, docTitle: "Shop", path:'/' });

  // Handlebars
  // res.render('shop', {
  //   prods: products,
  //   pageTitle: 'Shop',
  //   path: '/',
  //   hasProducts: products.length > 0,
  //   activeShop: true,
  //   productCSS: true
  // });
});

module.exports = router;

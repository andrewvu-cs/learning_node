// Core nodejs module
const path = require("path");

// Third party node module
const express = require("express");

const productsController = require('../controllers/products');

const router = express.Router();

// admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

// admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

module.exports = router;



// LEGACY DATA

// const rootDir = require("../util/path");

// // admin/add-product => GET
// router.get("/add-product", (req, res, next) => {
//   // console.log("In another middleware!");
//   // res.sendFile(path.join(rootDir, "views", "add-product.html")); // send sets the header for us 'text/html'

//   // PUG
//   res.render("add-product", {
//     docTitle: "Add Product",
//     path: "/admin/add-product"
//   });

//   // HANDLEBARS
//   // router.get('/add-product', (req, res, next) => {
//   //   res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
//   // });
// });

// router.post("/add-product", (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect("/");
// });

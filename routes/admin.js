const express = require("express");

const router = express.Router();

// app.use allows us to do a middleware function will be executed after every request
router.get("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send(
    '<form action="/admin/add-product" method="POST"> <input type="text" name="title"/><button type="submit">Add product</button></form>'
  ); // send sets the header for us 'text/html'
});

//post for post requeust
//get for get requests
//use for both types of requests
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
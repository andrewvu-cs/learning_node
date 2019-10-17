// Thirdy party pkgs
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// catach all routes
app.use((req, res, next) => {
    res.status(404).send('<h1> Page not found</h1>')
});

// createServer return a server
// after we end our response we do not want to send another response

// Listens for client request
app.listen("3003");

//headers are metadata

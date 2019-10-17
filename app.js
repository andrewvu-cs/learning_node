// core module
// path ensures that were able to get into this folder in respective OS's
const path = require("path");

// Thirdy party pkgs
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// catach all routes
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

// createServer return a server
// after we end our response we do not want to send another response

// Listens for client request
app.listen("3002");

//headers are metadata

// core module
// path ensures that were able to get into this folder in respective OS's
const path = require("path");

// Thirdy party pkgs
const express = require("express");
const bodyParser = require('body-parser');
// Handlebars templating engine
// const expressHbs = require('express-handlebars');


const app = express();

// HANDLEBARS TEMPLATING ENGINE
// app.engine('handlebars', expressHbs());
// app.set('view engine', 'handlebars');
// app.set('views', 'views');

// PUG TEMPLATING ENGINE
app.set('view engine', 'pug');
app.set('views', 'views');

// EJS TEMPLATING ENGINE
// app.set('view engine', 'ejs');
// app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// catach all routes
app.use((req, res, next) => {
    // res.sendFile(path.join(__dirname, 'views', '404.html'));
    // PUG
    res.render("404", {docTitle: "PAGE NOT FOUND"})

    // HANDLEBARS
    // res.status(404).render('404', { pageTitle: 'Page Not Found' })
});

// createServer return a server
// after we end our response we do not want to send another response

// Listens for client request
app.listen("3002");

//headers are metadata

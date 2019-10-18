exports.get404 = (req, res, next) => {
    // res.sendFile(path.join(__dirname, 'views', '404.html'));
    // PUG
    res.render("404", {pageTitle: "PAGE NOT FOUND"})

    // HANDLEBARS
    // res.status(404).render('404', { pageTitle: 'Page Not Found' })
};
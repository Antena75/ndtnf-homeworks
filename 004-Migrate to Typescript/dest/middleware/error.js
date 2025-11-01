"use strict";
module.exports = (function (req, res) {
    res.render('errors/404', {
        title: 404,
    });
});

"use strict";

module.exports = function corsSupport(req, res, next) {
    res.header('X-Frame-Options', 'deny');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      return res.send(200);
    } 
      
    next();
};
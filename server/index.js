var express = require('express');
var path = require('path');
var app = express();
app.use(function(req, res, next) {
    console.log(req.method+' '+req.url)
    console.log(process.cwd());
    next();
})
app.use('/', express.static('dist'));

app.listen(80);
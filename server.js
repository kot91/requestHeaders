var express = require('express');
var app = express();

app.use(express.static(process.cwd() + '/views'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./routes/routes.js')(app);

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");

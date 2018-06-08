const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//prevenindo problema de cross origin
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//request base
app.get('/', (req, res) => {
    res.status(200).send({"status": "ok"});
});

//requires de rotas
require('./controllers/authController')(app);
require('./controllers/itemController')(app);
require('./controllers/itemAuthController')(app);
require('./controllers/magiaController')(app);
require('./controllers/magiaAuthController')(app);
require('./controllers/racaController')(app);
require('./controllers/racaAuthController')(app);
require('./controllers/classeControllers')(app);
require('./controllers/classeAuthController')(app);

module.exports = app;
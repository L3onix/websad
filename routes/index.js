var express = require('express'),
    router = express.Router();

router.get('/', function(req, res){});

//usuarios
router.use('/usuarios', require('./usuarios'));

module.exports = router;
var express = require('express'),
    router = express.Router();

router.get('/', function(req, res){
    res.send('captura todos os usuarios');
});

module.exports = router;
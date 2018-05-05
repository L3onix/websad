var express = require('express'),
    router = express.Router();

var UsuarioController = require('../controllers/UsuarioController');

router.get('/', UsuarioController.getAll);
router.get('/:_id', UsuarioController.getById);


module.exports = router;
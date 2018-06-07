const express = require('express'),
    router = express.Router(),
    Magia = require('../models/magia');

//rota 
router.get('/', async (req, res) => {
    return res.status(200).send({ok: true});
});

module.exports = app => app.use('/magia', router);
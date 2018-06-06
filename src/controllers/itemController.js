const express = require('express'),
    router = express.Router(),
    authMid = require('../middlewares/auth'),
    Item = require('../models/item');

//router.use(authMid);

router.get('/', (req, res) => {
    res.status(200).send({ok: true});
});

module.exports = app => app.use('/item', router);
const express = require('express'),
    router = express.Router(),
    authMid = require('../middlewares/auth'),
    Item = require('../models/item'),
    Tipo = require('../models/item/tipo');

router.use(authMid);

router.get('/', async (req, res) => {
    res.send({ok: true});
});

//criar item
router.post('/', async (req, res) => {
    try{
        const tipo = req.body.tipo;
        const tipoId = await Tipo.findOne({nome: tipo}, '_id');
        //console.log(tipoId._id);

        req.body.tipo = tipoId._id;
        //console.log(req.body.tipo);

        const item = await Item.create(req.body);

        return res.status(200).send({item});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao criar novo tipo'});
    }
});

module.exports = app => app.use('/itemAuth', router);
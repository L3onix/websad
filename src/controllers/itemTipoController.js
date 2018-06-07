const express = require('express'),
    router = express.Router(),
    authMid = require('../middlewares/auth'),
    Tipo = require('../models/item/tipo');

//router.use(authMid);

router.get('/', async (req, res) => {
    //res.status(200).send({ok: true});
    try{
        const tipos = await Tipo.find();

        return res.status(200).send({tipos});
    }catch(err){
        console.log(err);
        return res.status(200).send({err: 'Erro ao carregar tipos'});
    }
});

router.post('/', async (req, res) => {
    try{
        const novoTipo = req.body;
        const tipo = await Tipo.create(req.body);

        return res.status(200).send({tipo});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao criar novo tipo'});
    }
});

module.exports = app => app.use('/itemTipo', router);
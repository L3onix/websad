const express = require('express'),
    router = express.Router(),
    Magia = require('../models/magia');

//rota para buscar todas as magias
router.get('/todas/', async (req, res) => {
    //return res.status(200).send({ok: true});
    try{
        const magias = await Magia.find().populate('criador');

        return res.status(200).send({magias});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar todas as magias'});
    }
});

//rota para buscar todas as magias oficiais
router.get('/', async (req, res) => {
    try{
        const magias = await Magia.find({"oficial": true}).populate('criador');

        return res.status(200).send({magias});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar magias oficiais'});
    }
});

//TODO: checar se a magia recebia é oficial
//rota para buscar uma magia
router.get('/:magiaId', async (req, res) => {
    try{
        const magia = await Magia.findById(req.params.magiaId);

        return res.status(200).send({magia});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar magia oficial'});
    }
});

module.exports = app => app.use('/magia', router);
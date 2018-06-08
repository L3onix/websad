const express = require('express'),
    router = express.Router(),
    Criatura = require('../models/criatura');

//rota para buscar todas as criaturas
router.get('/todas/', async (req, res) => {
    //return res.status(200).send({ok: true});
    try{
        const criaturas = await Criatura.find().populate('criador');

        return res.status(200).send({criaturas});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar todas as criaturas'});
    }
});

//rota para buscar todas as criaturas oficiais
router.get('/', async (req, res) => {
    try{
        const criaturas = await Criatura.find({"oficial": true}).populate('criador');

        return res.status(200).send({criaturas});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar criaturas oficiais'});
    }
});

//TODO: checar se a criatura recebia é oficial
//rota para buscar uma criatura
router.get('/:criaturaId', async (req, res) => {
    try{
        const criatura = await Criatura.findById(req.params.criaturaId);

        return res.status(200).send({criatura});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar criatura oficial'});
    }
});

module.exports = app => app.use('/criatura', router);
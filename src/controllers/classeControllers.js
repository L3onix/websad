const express = require('express'),
    router = express.Router(),
    Classe = require('../models/classe');

//rota para buscar todas as classes
router.get('/todas/', async (req, res) => {
    //return res.status(200).send({ok: true});
    try{
        const classes = await Classe.find().populate('criador');

        return res.status(200).send({classes});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar todas as classes'});
    }
});

//rota para buscar todas as classes oficiais
router.get('/', async (req, res) => {
    try{
        const classes = await Classe.find({"oficial": true}).populate('criador');

        return res.status(200).send({classes});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar classes oficiais'});
    }
});

//TODO: checar se a classe recebia é oficial
//rota para buscar uma classe
router.get('/:classeId', async (req, res) => {
    try{
        const classe = await Classe.findById(req.params.classeId);

        return res.status(200).send({classe});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar classe oficial'});
    }
});

module.exports = app => app.use('/classe', router);
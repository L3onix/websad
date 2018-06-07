const express = require('express'),
    router = express.Router(),
    Raca = require ('../models/raca');

//buscar por todos as raças
router.get('/todos/', async (req, res) => {
    try{
        const racas = await Raca.find();

        return res.status(200).send({racas});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar todas as raças'});
    }
});

//buscar todos os itens oficiais 
router.get('/', async (req, res) => {
    //res.status(200).send({ok: true});
    try{
        const racas = await Raca.find({"oficial": true});

        return res.status(200).send({racas});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar raças'});
    }
});

//TODO: checar se a raça recebida é oficial
//buscar por id
router.get('/:racaId', async (req, res) => {
    try{
        const raca = await Raca.findById(req.params.racaId);

        return res.status(200).send({raca});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar raça'});
    }
});

module.exports = app => app.use('/raca', router);
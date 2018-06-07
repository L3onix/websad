const express = require('express'),
    router = express.Router(),
    authMid = require('../middlewares/auth'),
    Item = require('../models/item'),
    Tipo = require('../models/item/tipo');

//router.use(authMid);

/*
//buscar todos os itens
router.get('/', async (req, res) => {
    //res.status(200).send({ok: true});
    try{
        const itens = await Item.find().populate('tipo', 'criador');

        return res.status(200).send({itens});
    }catch(err){
        console.log(err);
        return res.status(200).send({err: 'Erro ao carregar itens'});
    }
});
*/

//buscar todos os itens oficiais 
router.get('/', async (req, res) => {
    //res.status(200).send({ok: true});
    try{
        const itens = await Item.find({"oficial": true});

        return res.status(200).send({itens});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar itens'});
    }
});
//TODO: concertar essa rota... esta rota ainda não está funcionando
//buscar por tipo
router.get('/:tipo', async (req, res) => {
    try{
        //const tipoId = buscarTipo(req.params.tipo);
        console.log(req.params.tipo);
        const itens = await Item.find({"tipo": req.params.tipo});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar itens'});
    }
})
/*
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
*/


//TODO: checar quando não existe o tipo selecionado
function buscarTipo(nomeTipo){
    const tipoId = Tipo.findOne({nome: nomeTipo}, '_id');
    return tipoId;
}

module.exports = app => app.use('/item', router);
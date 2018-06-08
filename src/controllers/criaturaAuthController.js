const express = require('express'),
    router = express.Router(),
    authMid = require('../middlewares/auth'),
    Criatura = require('../models/criatura');

router.use(authMid);

//buscar todos as criaturas do usuário
router.get('/', async (req, res) => {
    //res.send({ok: true});
    try{
        const criaturas = await Criatura.find({criador: req.userId});

        return res.status(200).send({criaturas});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar criaturas'});
    }
});

//TODO: checar se o usuário da req é igual ao dono da criatura
//buscar uma criatura
router.get('/:criaturaId', async (req, res) => {
    try{
        const criatura = await Criatura.findById(req.params.criaturaId);

        return res.status(200).send({criatura});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar criatura'});
    }
});

//criar criatura
router.post('/', async (req, res) => {
    try{
        const criatura = await Criatura.create({...req.body, criador: req.userId});

        return res.status(200).send({criatura});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao criar nova criatura'});
    }
});

//TODO: checar se o usuário do token é dono da criatura
//editar criatura
router.put('/:criaturaId', async (req, res) => {
    try{
        const criatura = await Criatura.findByIdAndUpdate(req.params.criaturaId, req.body, {new: true});
        
        return res.status(200).send({criatura});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao editar criatura'});
    }
});

//TODO: checar se o usuário da req é dono do criatura
//deletar criatura
router.delete('/:criaturaId', async (req, res) => {
    try{
        await Criatura.findByIdAndRemove(req.params.criaturaId);

        return res.status(200).send({delete: true});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao deletar criatura'});
    }
});

module.exports = app => app.use('/criaturaAuth', router);
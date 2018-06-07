const express = require('express'),
    router = express.Router(),
    authMid = require('../middlewares/auth'),
    Raca = require('../models/raca');

router.use(authMid);

//buscar todos as raças que o usuário criou
router.get('/', async (req, res) => {
    try{
        const racas = await Raca.find({criador: req.userId});

        return res.status(200).send({racas});
    }catch(err){
        console.log(err);
        return  res.status(200).send({err: 'Erro ao carregar as raças'});
    }
});

//TODO: checar se o usuário da req é igual ao dono da raça
//buscar uma raça
router.get('/:racaId', async (req, res) => {
    try{
        const raca = await Raca.findById(req.params.racaId);

        return res.status(200).send({raca});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar raca'});
    }
});

//criar raça
router.post('/', async (req, res) => {
    try{
        const raca = await Raca.create({...req.body, criador: req.userId});

        return res.status(200).send({raca});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao criar nova raça'});
    }
});

//TODO: checar se usuário da req é dono da raca
//editar raca
router.put('/:racaId', async (req, res) => {
    try{
        const raca = await Raca.findByIdAndUpdate(req.params.racaId, req.body, {new: true});

        return res.status(200).send({raca});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao editar item'});
    }
});

//TODO: checar se o usuário da req é dono da raça
//deletar raça
router.delete('/:racaId', async (req, res) => {
    try{
        await Raca.findByIdAndRemove(req.params.racaId);

        return res.status(200).send({delete: true});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao deletar raça'});
    }
});

module.exports = app => app.use('/racaAuth', router);
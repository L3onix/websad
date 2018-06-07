const express = require('express'),
    router = express.Router(),
    authMid = require('../middlewares/auth'),
    Magia = require('../models/magia');

router.use(authMid);

//buscar todos as magias do usuário
router.get('/', async (req, res) => {
    //res.send({ok: true});
    try{
        const magias = await Magia.find({criador: req.userId});

        return res.status(200).send({magias});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar magias'});
    }
});

//TODO: checar se o usuário da req é igual ao dono da magia
//buscar uma magia
router.get('/:magiaId', async (req, res) => {
    try{
        const magia = await Magia.findById(req.params.magiaId);

        return res.status(200).send({magia});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao carregar magia'});
    }
})

//criar magia
router.post('/', async (req, res) => {
    try{
        const magia = await Magia.create({...req.body, criador: req.userId});

        return res.status(200).send({magia});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao criar nova magia'});
    }
});

//TODO: checar se o usuário do token é dono da magia
//editar magia
router.put('/:magiaId', async (req, res) => {
    try{
        const magia = await Magia.findByIdAndUpdate(req.params.magiaId, req.body, {new: true});
        
        return res.status(200).send({magia})
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao editar magia'});
    }
});

//TODO: checar se o usuário da req é dono do item
//deletar magia
router.delete('/:magiaId', async (req, res) => {
    try{
        await Magia.findByIdAndRemove(req.params.magiaId);

        return res.status(200).send({delete: true});
    }catch(err){
        console.log(err);
        return res.status(400).send({err: 'Erro ao deletar magia'});
    }
});

module.exports = app => app.use('/magiaAuth', router);
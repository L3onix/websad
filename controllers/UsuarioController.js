function UsuarioController(){}

UsuarioController.prototype.getAll = function(req, res, next){
    res.send('retornar todos os usuários');
};
UsuarioController.prototype.getById = function(req, res, next){
    res.send('retorna um usuário específico');
};

module.exports = new UsuarioController();
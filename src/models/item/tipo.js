const mongoose = require('../../database/connection');

const TipoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    atributos:{
        type: JSON,
    }
});

const Tipo = mongoose.model('Tipo', TipoSchema);

module.exports = Tipo;
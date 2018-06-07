const mongoose = require('../../database/connection');

const MoedaSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
    }
});

const Moeda = mongoose.model('Moeda', MoedaSchema);

module.exports = Moeda;
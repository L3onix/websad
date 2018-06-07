const mongoose = require('../../database/connection');

const MagiaSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    nivel:{
        type: Number,
        required: true
    },
    escola:{
        type: String,
        required: true
    },
    tempodeconjuracao:{
        type: Number,
        required: true
    },
    alcance:{
        type: Number
    },
    componentes: {
        type: String
    },
    duracao:{
        type: String
    },
    descricao:{
        type: String,
        required: true
    },
    ritual:{
        type: Boolean,
        default: false
    },
    areadeefeito:{
        type: String
    },
    criador:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    oficial:{
        type: Boolean,
        default: false
    }
});

const Magia = mongoose.model('Magia', MagiaSchema);

module.exports = Magia;
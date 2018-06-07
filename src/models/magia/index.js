const mongoose = require('../../database/connection');

const magiaSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    nivel:{
        type: Number,
        required: true
    },
    escola:{
        abjuracao:{
            type: Boolean,
            default: false
        }
    },
    tempodeconjuracao:{
        type: Number,
        required: true
    },
    alcance:{
        type: Number
    },
    componentes: {
        type: String,
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
    }
});
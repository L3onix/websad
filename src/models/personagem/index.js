const mongoose = require('../../database/connection');

const PersonagemSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    aparencia:{
        type: JSON
    },
    classe:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classe'
    }],
    nivel:{
        type: Number,
        required: true,
        default: 0
    },
    antecedente:{
        type: String
    },
    raca:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Raca'
    },
    tendencias:[{
        type: String
    }],
    pontosexp:[{
        type: Number,
        required: true
    }],
    atributos:{
        type: JSON,
        required: true
    },
    resistencias:{
        type: JSON
    },
    pericias:{
        type: JSON
    },
    inspiracao:{
        type: Boolean,
        default: false,
        required: true
    },
    proeficiencia:{
        type: JSON
    },
    iniciativa:{
        type: Number
    },
    pontosdevida:[{
        type: Number,
        required: true
    }],
    dadodevida:{
        type: String
    },
    biografia:{
        type: String
    },
    magias:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Magia'
    }],
    itens:[{
        type: mongoose.Schema.Types.ObjectId
    }],
    criador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Personagem = mongoose.model('Personagem', PersonagemSchema);

module.exports = Personagem;
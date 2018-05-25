//requires
const mongoose = require('../database/connection'),
    bcryptjs = require('bcryptjs');

//defindo schema de usuário
const UserSchema = new mongoose.Schema({
    nick:{
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String, 
        required: true,
        select: false
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

//gerando hash criptografica de senha do user
UserSchema.pre('save', async function(next){
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;

    next();
});

//definindo que 'User' segue o modelo 'UserSchema'
const User = mongoose.model('User', UserSchema);

//exports
module.exports = User;
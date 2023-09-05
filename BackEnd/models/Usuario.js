const {Schema, model} = require("mongoose");

const usuarioSchema = Schema({
    usuario:{
        type: String,
        required: [true, 'El usuario es obligatorio'],
        unique: true
    },
    correo:{
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
       
    },
    password:{ 
        type: String,
        required: [true,'La contraseña es requerida']
        
    },
    imagen: {
        type: String,

    },
    rol: {
        type:String,
        required: true,
        default: 'USER',
        enum: ['ADMIN','USER']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model("Usuario", usuarioSchema);

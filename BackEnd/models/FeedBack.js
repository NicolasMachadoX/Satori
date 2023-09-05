const {Schema, model} = require("mongoose");

const feedSchema = Schema({
    usuario:{
        type: String,
        required: [true, 'dato obligatorio']
    },
    horaFecha:{
        type: String,
        required: [true, 'dato obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'dato obligatorio']
    },
    img: {
        type: String,
        required: [true, 'dato obligatorio']
    }
    });

    module.exports = model("feedback", feedSchema);
const {Schema, model} = require("mongoose");

const libroSchema = Schema({
    nombre: {
        type: String,
        require: [true,'Nombre es requerido']
    },
    pagina: {
        type: Number,
        require: [true, 'portada es requerida']
    }
    });

    module.exports = model("libro", libroSchema);
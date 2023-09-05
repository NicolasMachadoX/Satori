const {Schema, model} = require("mongoose");

const lectorSchema = Schema({
    nombre: {
        type: String,
        require: [true,'Nombre es requerido']
    },
    portada: {
        type: String,
        require: [true, 'portada es requerida']
    }
    });

    module.exports = model("lector", lectorSchema);
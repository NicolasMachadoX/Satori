const {Schema, model} = require("mongoose");

const eventoSchema = Schema({
    evento:{
        type: String
    },
    descripcion: {
        type: String,
    },
    dia:{
        type: String
    },
    hora:{
        type: String
    },
    lugar:{
        type: String
    },
    img: {
        type: String,
    }
    });

    module.exports = model("evento", eventoSchema);
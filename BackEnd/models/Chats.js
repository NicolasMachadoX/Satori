const {Schema, model} = require("mongoose");

const chatsSchema = Schema({

    mensaje:{
        type: String,
        require: true
    },
    horaFecha:{
        type: String,
        require: true
    }});

    module.exports = model("chat", chatsSchema);
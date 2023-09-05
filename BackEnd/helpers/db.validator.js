const Role = require("../models/Role.js");

const Usuario = require("../models/Usuario.js");

const isValidRole = async (rol="")=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`);

    }

}

const emailExiste = async(email = "") =>{
    const existeEmail = await Usuario.findOne({email});
    if(existeEmail){
        throw new Error(`El email: ${email}, ya esta registrado`);
    }

}

const userExistsById = async (id) =>{
    const userExists = await Usuario.findById(id);
    if(!userExists){
        throw new Error(`El id (usuario) no existe ${id}`);
    }

}

module.exports = {
    isValidRole,
    emailExiste,
    userExistsById
}
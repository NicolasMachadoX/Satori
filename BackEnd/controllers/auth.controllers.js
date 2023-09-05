const {response} = require('express');

const bcryptjs = require('bcryptjs');

const Usuario = require('../models/Usuario');
const { generateJWT } = require('../helpers/generate.JWT.js');

const login = async (req, res=response)=>{
    const {correo, password} = req.body;
    try {
        //Verificar si existe el Email en la base de datos 
        const existeEmail = await Usuario.findOne({correo});

        if(!existeEmail){
            return res.status(400).json({
                msg: "Email no existe"

            })
        }


        //Verificar si el Usuario está activo 

        if(existeEmail.estado === false){
            return res.status(400).json({
                msg:"usuario no activo"
            })
        }

        //Generacion JSON WEB TOKEN
        const token = await generateJWT(Usuario.id)


   //Verificar si el password es correcto y coincide con la llave

   const passwordValido = bcryptjs.compareSync(password,existeEmail.password)
   if(!passwordValido){
       return res.status(400).json({
           msg:"El password no coincide"
       })
   }

     

        res.json({
            msg: "Ok",
            existeEmail,token
        })

    } catch (error) {
        console.log(error);
        return res.json({
            msg:"Datos insuficientes, contacte a servicio tecnico"
        })
    }
   


}

module.exports = {
    login

}
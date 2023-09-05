const Usuario = require('../models/Usuario.js');
const bcryptjs = require('bcryptjs');



const getUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(404).send(error);
    }
};

const getUser = async (req, res) => {
    try {
        const usuario = await Usuario.find({ _id: req.params.id });
        res.json(usuario);
    } catch (error) {
        res.status(404).send(error);
    }
};


const deleteUser = async (req, res) => {
    try {
        await Usuario.deleteOne({ _id: req.params.id });
        res.send("LIMPIEZA DE GRUPO");
    } catch (error) {
        res.status(404).send(error);
    }
};


const postUser = async (req,res)=>{

    const {usuario, correo , password} = req.body;
    const estado = true;
    const rol = "USER";
    const user = new Usuario({usuario,correo,password,estado,rol});



    //validar si el Correo está duplicado
    const existeEmail = await Usuario.findOne({"correo":correo});
    if(existeEmail){
        
        return res.status(400).json({
          msg:  "Correo ya registrado"
        })
    }

    //Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password,salt);



    try {
        const nuevoUsuario = await user.save();
       return res.json(nuevoUsuario);
    } catch (error) {   
        console.log(error);
    }
   
};

const authUser = async (req, res) => {

    const { correo, password } = req.body;
    
    const existeEmail = await Usuario.findOne({ "correo": correo, "password": password });
   
    if(existeEmail) {
      
        return res.json(existeEmail._id);
    }

    

};

const putUsers = async (req,res) => {
    try {
       const {id} = req.params;
       const {password, ...resto} = req.body;

       if(password){
        const salt = bcryptjs.genSaltSync();
        password = bcryptjs.hashSync(password,salt);
       }

       const user = await Usuario.findByIdAndUpdate(id, resto, {new:true});

       res.json({
        msg: "Usuario Actualizado",
        usuario: user
       })
    }catch (error) {
     res.send(error);   
    }
}

const patchUser = async (req, res) => {
    try {
        const usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(usuario);
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = { authUser, getUsers, postUser, deleteUser, getUser, patchUser, putUsers };
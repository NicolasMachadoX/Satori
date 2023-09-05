const {Router} = require('express');
const {check} = require("express-validator");
const {getUsers, getUser, deleteUser,  postUser, patchUser, authUser, putUsers} = require('../controllers/usuario.controllers.js');
const { validateDocuments } = require('../middlewares/validate.documents.js');

const Role = require("../models/Role.js");


const router = Router();


router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/:log", authUser)
router.delete("/:id", deleteUser);
router.put("/:id", putUsers )
router.post("/",[
                 check('correo', 'El correo no es valido').isEmail(),
                 check('usuario', 'El usuario es obligatorio').not().isEmpty(),
                 check('password', 'La Contraseña debe llevar minimo 8 letras y 1 mayuscula').isLength({ min: 8 }).not().isLowercase(),
                 check('rol').custom(async(rol='')=>{
                            const existeRol = await Role.findOne({rol});
                            if(!existeRol){
                                throw new Error(`El rol ${rol} no está registrado en la base de datos`)
                            }                 
                 }),
                 validateDocuments
                ] ,postUser)
                 
router.patch("/:id", patchUser);




module.exports = router;
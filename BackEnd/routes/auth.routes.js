const {Router} = require('express');

const {check} = require('express-validator');

const { login } = require('../controllers/auth.controllers.js');
const { validateDocuments } = require('../middlewares/validate.documents.js');

const router = Router();

router.post("/login", 
[check('correo','Email requerido' ).isEmail(),
check("password",'Contraseña requerida').not().isEmpty(),
validateDocuments]
,login );

module.exports = router;
const {Router} = require('express');
const {getLibros, getLibro, deleteLibro,  postLibro, patchLibro} = require('../controllers/libro.controllers.js');



const router = Router();


router.get("/", getLibros);
router.get("/:nombre/:pagina", getLibro);
router.delete("/:id", deleteLibro);
router.post("/",postLibro)
router.patch("/:id", patchLibro);




module.exports = router;
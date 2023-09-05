const {Router} = require('express');
const {getEventos, getEvento, deleteEvento,  postEvento, patchEvento} = require('../controllers/eventos.controllers.js');



const router = Router();


router.get("/", getEventos);
router.get("/:id", getEvento);
router.delete("/:id", deleteEvento);
router.post("/",postEvento)
router.patch("/:id", patchEvento);




module.exports = router;
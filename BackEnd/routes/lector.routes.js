const {Router} = require('express');
const {getLectores, getLector, deleteLector,  postLector, patchLector} = require('../controllers/lector.controllers.js');



const router = Router();


router.get("/", getLectores);
router.get("/:id", getLector);
router.delete("/:id", deleteLector);
router.post("/",postLector)
router.patch("/:id", patchLector);




module.exports = router;
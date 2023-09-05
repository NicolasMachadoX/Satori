const {Router} = require('express');
const {getChats, getChat, deleteChat,  postChat, patchChat} = require('../controllers/chat.controllers.js');



const router = Router();


router.get("/", getChats);
router.get("/:id", getChat);
router.delete("/:id", deleteChat);
router.post("/",postChat)
router.patch("/:id", patchChat);




module.exports = router;
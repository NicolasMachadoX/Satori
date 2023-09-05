const {Router} = require('express');
const {getFeedBacks, getFeedBack, deleteFeedBack,  postFeedBack, patchFeedBack} = require('../controllers/feedback.controllers.js');



const router = Router();


router.get("/", getFeedBacks);
router.get("/:id", getFeedBack);
router.delete("/:id", deleteFeedBack);
router.post("/",postFeedBack)
router.patch("/:id", patchFeedBack);




module.exports = router;
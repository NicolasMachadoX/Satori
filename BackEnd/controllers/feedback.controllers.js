const FeedBack = require('../models/FeedBack.js');

const getFeedBacks = async (req,res) =>{
    try {
        const FeedBackes = await FeedBack.find();
        res.json(FeedBackes);
    } catch (error) {
        res.status(404).send(error);
    }
};

const getFeedBack = async (req,res) =>{
    try {
     const FeedBack = await FeedBack.find({_id:req.params.id});
     res.json(FeedBack);   
    } catch (error) {
     res.status(404).send(error);   
    }
};


const deleteFeedBack = async (req,res) =>{
    try {
        await FeedBack.deleteOne({_id:req.params.id});
        res.send("LIMPIEZA DE GRUPO");
    } catch (error) {
        res.status(404).send(error)};
};


const postFeedBack = async (req,res)=>{
    const body = req.body;
    const feedBack = new FeedBack(body);
    try {
        const nuevoFeedBack = await feedBack.save();
        res.json(nuevoFeedBack);
    } catch (error) {
        console.log(error);
    }
};



const patchFeedBack = async (req,res) =>{
    try {
        const FeedBack = await FeedBack.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
        res.json(FeedBack);
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = { getFeedBacks, postFeedBack, deleteFeedBack, getFeedBack, patchFeedBack };
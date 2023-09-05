const Chat = require('../models/Chats.js');

const getChats = async (req,res) =>{
    try {
        const Chats = await Chat.find();
        res.json(Chats);
    } catch (error) {
        res.status(404).send(error);
    }
};

const getChat = async (req,res) =>{
    try {
     const Chat = await Chat.find({_id:req.params.id});
     res.json(Chat);   
    } catch (error) {
     res.status(404).send(error);   
    }
};


const deleteChat = async (req,res) =>{
    try {
        await Chat.deleteOne({_id:req.params.id});
        res.send("LIMPIEZA DE GRUPO");
    } catch (error) {
        res.status(404).send(error);
    } 
};


const postChat = async (req,res)=>{
    const body = req.body;
    const chat = new Chat(body);
    try {
        const nuevoChat = await chat.save();
        res.json(nuevoChat);
    } catch (error) {
        console.log(error);
    }
};



const patchChat = async (req,res) =>{
    try {
        const chat = await Chat.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
        res.json(chat);
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = { getChats, postChat, deleteChat, getChat, patchChat };
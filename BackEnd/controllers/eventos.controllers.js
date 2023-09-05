const Evento = require('../models/Eventos.js');

const getEventos = async (req,res) =>{
    try {
        const Eventos = await Evento.find();
        res.json(Eventos);
    } catch (error) {
        res.status(404).send(error);
    }
};

const getEvento = async (req,res) =>{
    try {
     const Evento = await Evento.find({_id:req.params.id});
     res.json(Evento);   
    } catch (error) {
     res.status(404).send(error);   
    }
};


const deleteEvento = async (req,res) =>{
    try {
        await Evento.deleteOne({_id:req.params.id});
        res.send("LIMPIEZA DE GRUPO");
    } catch (error) {
        res.status(404).send(error);
    } 
};


const postEvento = async (req,res)=>{
    const body = req.body;
    const evento = new Evento(body);
    try {
        const nuevoEvento = await evento.save();
        res.json(nuevoEvento);
    } catch (error) {
        console.log(error);
    }
};



const patchEvento = async (req,res) =>{
    try {
        const Evento = await Evento.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
        res.json(Evento);
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = { getEventos, postEvento, deleteEvento, getEvento, patchEvento };
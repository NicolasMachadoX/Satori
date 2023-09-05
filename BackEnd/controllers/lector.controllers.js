const Lector = require('../models/Lector.js');

const getLectores = async (req,res) =>{
    try {
        const Lectores = await Lector.find();
        res.json(Lectores);
    } catch (error) {
        res.status(404).send(error);
    }
};

const getLector = async (req,res) =>{
    try {
     const Lector = await Lector.find({_id:req.params.id});
     res.json(Lector);   
    } catch (error) {
     res.status(404).send(error);   
    }
};


const deleteLector = async (req,res) =>{
    try {
        await Lector.deleteOne({_id:req.params.id});
        res.send("LIMPIEZA DE GRUPO");
    } catch (error) {
        res.status(404).send(error);
    } 
};


const postLector = async (req,res)=>{
    const body = req.body;
    const lector = new Lector(body);
    try {
        const nuevoLector = await lector.save();
        res.json(nuevoLector);
    } catch (error) {
        console.log(error);
    }
};



const patchLector = async (req,res) =>{
    try {
        const Lector = await Lector.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
        res.json(Lector);
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = { getLectores, postLector, deleteLector, getLector, patchLector };
const Libro = require('../models/Libro.js');

const getLibros = async (req,res) =>{
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        res.status(404).send(error);
    }
};

const getLibro = async (req,res) =>{
    try {
        console.log(req.params.pagina);
     const libro = await Libro.find({"nombre":req.params.nombre, "pagina":req.params.pagina});
     res.json(libro);   
    } catch (error) {
     res.status(404).send(error);   
    }
};


const deleteLibro = async (req,res) =>{
    try {
        await Libro.deleteOne({_id:req.params.id});
        res.send("LIMPIEZA DE GRUPO");
    } catch (error) {
        res.status(404).send(error);
    } 
};


const postLibro = async (req,res)=>{
    const body = req.body;
    const libro = new Libro(body);
    try {
        const nuevolibro = await libro.save();
        res.json(nuevolibro);
    } catch (error) {
        console.log(error);
    }
};



const patchLibro = async (req,res) =>{
    try {
        const libro = await libro.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
        res.json(libro);
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = { getLibros, postLibro, deleteLibro, getLibro, patchLibro };
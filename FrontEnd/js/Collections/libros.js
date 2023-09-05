//Renderizar paginas
import {libro} from "../Apis/ApiLibros.js"; 
const paginaCont = document.querySelector('#pagina');
const paginaSelect = document.querySelector("#selectPag");



const librosRender = async () =>{
    const pagina = document.querySelector("#selectPag").value;
    console.log(pagina);

  
    const libross = await libro(pagina);
    console.log(libross);

    libross.forEach(element =>{
      const {img} = element;

      paginaCont.innerHTML = `
     
           <img  src="${img}" alt="Magazine"> `;
    })
    
}

addEventListener("DOMContentLoaded", librosRender);


const librosChange = async () =>{
    const pagina = document.querySelector("#selectPag").value;
    console.log(pagina);

  
    const libross = await libro(pagina);
    console.log(libross);

    libross.forEach(element =>{
      const {img} = element;

      paginaCont.innerHTML = `
     
           <img  src="${img}" alt="Magazine"> `;
    })
    
}

paginaSelect.addEventListener('change', librosChange);

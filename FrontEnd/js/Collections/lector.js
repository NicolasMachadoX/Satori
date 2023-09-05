//Renderizar Portadas
import {mangas} from "../Apis/ApiLector.js"; 
const kiosko = document.querySelector('#kioskoId');

const portadasRender = async () =>{
    const portadas = await mangas();
    console.log(portadas);
    portadas.forEach(element =>{
      const {portada, nombre} = element;
      kiosko.innerHTML += `
      <a href="Libro.html" class="magazine">
           <img class="portada" manga="${nombre}" src="${portada}" alt="Magazine">
         </a>
 `;
    })
    
}

addEventListener('DOMContentLoaded', portadasRender);

const paginaButton = document.querySelector("#kioskoId");

const getManga = (e) =>{
  const manga = e.target.getAttribute('manga')
  localStorage.setItem("nombreManga", manga);
  console.log(manga);
}

paginaButton.addEventListener('click', getManga);


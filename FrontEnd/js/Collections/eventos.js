
import { eventos,insertar } from "../Apis/ApiEventos.js";

const eventosCont = document.querySelector('.eventosContainer');
const eventRender = async () => {
    const Eventos = await eventos();
    console.log(Eventos);
  
    Eventos.forEach(element => {
      const { evento, descripcion, lugar, hora, dia, img } = element;
      eventosCont.innerHTML += `
        <div class="containere" >
          <div class="cardB">
            <div class="imgBox">
             <a href="inter.html" action="./middle.js" class="btnAsi">
              <img class="kankunapa" src="${img}" evento="${evento}" alt=""> </a>
            </div>
            <div class="content" >
              <div class="ord" >
                <h2 style="color: #aafa5a;">${evento}</h2>
              
              </div>
             
              <p style="color: #aafa5a;">${descripcion}</p>
              <p style="color: #aafa5a;">${lugar}</p>
              <p style="color: #aafa5a;">${dia}</p>
              <p style="color: #aafa5a;">${hora}</p>
            </div>
          </div>
         
        </div>`;
    });
    
  };
  
 
addEventListener("DOMContentLoaded", eventRender);


//Subir Eventos

const postFormEvent = document.querySelector("#newerPost");



const insert = (e) => {
    e.preventDefault();
  
    const descripcion = document.querySelector("#descripcion").value;
    const dia = document.querySelector("#dia").value;
    const hora =  document.querySelector("#hora").value;
    const evento = document.querySelector("#evento").value;
    const lugar = document.querySelector("#lugar").value;
    const imagen = document.querySelector("#imagen").value;
  
    const nuevoEvento = {
        descripcion,
        dia,
        hora,
        evento,
        lugar,
        imagen  
      }
      
   
      
    if(validation(nuevoEvento)){
        alert("Todos los datos son obligatorios manito")
    }else{
        insertar(nuevoEvento)
        alert("Evento publicado Satisfactoriamente")
    }
    
}

 const validation = (obj)=>{
    return !Object.values(obj).every(element => element !== "")
}

postFormEvent.addEventListener('submit', insert);


      
 const btnAsi = document.querySelector(".eventosContainer")    ;
 const eventosINV = [];

 const asistire = (e)=>{

  e.preventDefault();
  const evento = e.target.getAttribute("evento");
  
  eventosINV.push(evento); 
  console.log(eventosINV);
  const eventosLocal = JSON.stringify(eventosINV);
  localStorage.setItem('eventos', eventosLocal);
  console.log(evento);
 }
 
 btnAsi.addEventListener('click', asistire)
    

   
   
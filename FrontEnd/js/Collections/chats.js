//render Mensajes
import { chats } from "../Apis/ApiChats.js";

const chater = document.querySelector('.boxFeedWC');


const renderChats = async () =>{
    const chatss = await chats();
    console.log(chats);
    chatss.forEach(element =>{
      const {mensaje, horaFecha} = element;
      chater.innerHTML += `
      <div class="comentarioC">
                    <div class="fechaH">
                      <h1 style=" font-size:12px" > ${mensaje}</h1>
                    </div>
                    <div class="mensaj">
                      <h1 style=" font-size:12px">${horaFecha}</h1>
                    </div>
     </div>
      
 `;
    })
    
}
addEventListener("DOMContentLoaded", renderChats);





//Subir mensajes
import {insertar} from "../Apis/ApiChats.js";

const mensajeCont = document.querySelector(".chatFeed");



const insert = (e) => {
    e.preventDefault()
    const mensaje = document.querySelector("#mensaje").value;
    const now = new Date();
    const horaFecha = `${now.toLocaleDateString()}, ${now.toLocaleTimeString()}`;

    console.log(horaFecha);

    const nuevomensaje = {
       mensaje,horaFecha
    
      }
  
      
    if(validation(nuevomensaje)){
        alert("Todos los datos son obligatorios manito");
    }else{
        insertar(nuevomensaje)
       

       
    }

}

const validation = (obj)=>{
    return !Object.values(obj).every(element => element !== "")
}

mensajeCont.addEventListener('submit', insert );



      
     
   
   
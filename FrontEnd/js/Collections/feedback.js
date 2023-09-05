//render feedback
import { publis, insertar } from "../Apis/ApiFeedback.js";

const feed = document.querySelector('.containerFeed');
const nextFeed = document.querySelector('#nextFeed');

const feedRender = async () =>{
    const portadas = await publis();
    console.log(portadas);
    portadas.forEach(element =>{
      const {descripcion,horaFecha, img} = element;
      feed.innerHTML += `
      <div class="carousel-item ">
     
                <div class="middleFeedback izq">
               
                  
                    <div class="boxFeed">
                    <div></div>
                      <div class="boxFeedW">
                        <img class="imgFeed" src="${img}" alt="">
                      </div>
                      <div class="scroll2-bg">
                      <div class="scroll2-div">
                         <div class="scroll2-object">
                  
                          
                         <h2 Style="  font-size: 14px;
                         font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: #17c52e;  ">${horaFecha}</h2>
                         <div class="boxFeedWB">
                         
                         <div class="ordFeed">
                         
                           <p Style="  font-size: 24px;
                           font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color: #17c52e;  ">${descripcion}</p>
                          
                         </div>
                        <div>
                        </div>
                       </div>
                       
                       </div>
                       
                     </div>
                   
                     <div>
                     <button data-bs-toggle="modal" data-bs-target="#exampleModal" id="newPost" class="btnPost">Nuevo post </button>
                     </div>
                          </div>
                           
                      </div>
                      
                     </div> 
                  
    
                </div>
             
            </div>  
  
           
 `;
    })
    
}
addEventListener("DOMContentLoaded", feedRender);



//Nuevo post


const post = document.querySelector("#exampleModal");



const insert = (e) => {
  e.preventDefault();

    
    localStorage.setItem("usuario", "Shadaz");

    const descripcion = document.querySelector("#descripcion").value;
    const img = document.querySelector("#imagen").value;
    const usuario = localStorage.getItem("usuario");
    const now = new Date();
    const horaFecha = `${now.toLocaleDateString()}, ${now.toLocaleTimeString()}`;
   console.log(horaFecha);

    const nuevoEvento = {
        descripcion,
        usuario,
        img,
        horaFecha
      }
      alert("3")
   
      
    if(validation(nuevoEvento)){
        alert("Todos los datos son obligatorios manito")
    }else{
        insertar(nuevoEvento)
        alert("Post publicado Satisfactoriamente")
    }
    alert("4")
}

const validation = (obj)=>{
    return !Object.values(obj).every(element => element !== "")
}


post.addEventListener('submit', insert
)



      
     
    

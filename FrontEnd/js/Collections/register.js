import { auth, insertar, usuario } from "../Apis/ApiUsuarios.js"


//registrar usuario

const registerForm = document.querySelector("#reg");

const registrar = (e)=>{
    e.preventDefault()
    const usuario = document.querySelector('#usuario').value;
    const correo =  document.querySelector('.correoR').value;
    const password = document.querySelector('#password').value;
    const imagen = "nulo";
    const rol = "USER";
    const estado = true;
    const registro = {
        usuario,correo,password,imagen,rol,estado}
        console.log(registro);

        if(validation(registro)){
            alert("Todos los datos son obligatorios manito")
        }else{
            insertar(registro)
            alert("registrado satisfactoriamente")
        }
    }



const validation = (obj)=>{
    return !Object.values(obj).every(element => element !== "")
}

registerForm.addEventListener('submit', registrar);

//login


 const loginBtn = document.querySelector('#log');

loginBtn.addEventListener('submit', login)


async function login(e){
    e.preventDefault()
    const correo = document.querySelector('.correo').value;
    const password = document.querySelector('#passwordd').value;
    const logeo = { password, correo };
    console.log(logeo);
    const data = await auth(logeo);  
    try {
        if(data.existeEmail.correo === correo || data.existeEmail.password === password ){
            console.log(); 
            usuarioActivo(data);
            window.location.href="inter.html"
        }
    } catch (error) {
        alert("Datos de sesión incorrectos")
 }

}
async function usuarioActivo(data){
    localStorage.setItem('usuarioActual',data.existeEmail._id);
    console.log(`"${data.existeEmail.usuario}" está conectado!`);
}
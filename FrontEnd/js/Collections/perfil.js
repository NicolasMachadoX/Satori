import {usuario} from  "../Apis/ApiUsuarios.js";
addEventListener('DOMContentLoaded', renderizadoPerfil);

async function renderizadoPerfil(e){
    e.preventDefault();
    alert("el pepi")
    const idUsuario = localStorage.getItem("usuarioActual")
    console.log(idUsuario);
    const infoPersonal = await usuario(idUsuario)
    console.log(infoPersonal);

}
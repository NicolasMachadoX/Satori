//register 

import { usuarios, usuario } from "../Apis/ApiUsuarios.js";

addEventListener('DOMContentLoaded',  async () =>{
    const data = await usuarios();

    const datau = await usuario("64cc70fb0e899693df6deaf3");
    console.log(data, datau);
})
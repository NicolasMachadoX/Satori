const url = 'http://localhost:8787/api/usuarios';
const urlLog = 'http://localhost:8787/api/auth/login';
//GetAll

export const usuarios = async () =>{
    try {
        const data = await fetch(`${url}`);
        const result = data.json();
        return result;
    } catch (error) {
     console.log(error);   
    }
}

export const usuario = async (id) =>{
    try {
       const data = await fetch(`${url}/${id}`);
       const result = data.json();
       return result;
    } catch (error) {
     console.log(error);   
    }
}

export const auth = async (logeo) => {
    try {
        const data = await fetch(`${urlLog}`,{
            method: 'POST',
            body: JSON.stringify(logeo),
            headers: {'Content-Type':'application/json'}
        });
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const eliminar = async (id) =>{
    try {
         await fetch(`${url}/${id}`,{
            method: DELETE,
            headers:{'Content-Type':'application/json'}
         });
        
    } catch (error) {
     console.log(error);   
    }
}

export const actualizar = async () =>{
    try {
        
    } catch (error) {
     console.log(error);   
    }
}

export const insertar = async (obj) =>{
   
    try {
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {'Content-Type':'application/json'}
        }) 
        window.location.href="index.html"
    } catch (error) {
     console.log(error);   
    }
}
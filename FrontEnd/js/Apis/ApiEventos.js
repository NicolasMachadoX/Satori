const url = 'http://localhost:8787/api/evento';

//GetAll

export const eventos = async () =>{
    try {
        
        const data = await fetch(`${url}`);
        const result = data.json();
        return result;
    } catch (error) {
     console.log(error);   
    }
}

export const evento = async (id) =>{
    try {
       const data = await fetch(`${url}/${id}`);
       const result = data.json();
       return result;
    } catch (error) {
     console.log(error);   
    }
}

export const insertar = async (evento) =>{
    try {
        await fetch(url,{
            method:'POST',
            body:JSON.stringify(evento),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href='Eventos.html'
    } catch (error) {
     console.log(error);   
    }
}
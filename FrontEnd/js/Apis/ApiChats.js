const url = 'http://localhost:8787/api/chat';

//GetAll

export const chats = async () =>{
    try {
        
        const data = await fetch(`${url}`);
        const result = data.json();
        return result;
    } catch (error) {
     console.log(error);   
    }
}

export const chat = async (id) =>{
    try {
       const data = await fetch(`${url}/${id}`);
       const result = data.json();
       return result;
    } catch (error) {
     console.log(error);   
    }
}

export const insertar = async (mensaje) =>{
    try {
        await fetch(url,{
            method:'POST',
            body:   JSON.stringify(mensaje),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href='Feedback.html'
     
      
    } catch (error) {
     console.log(error);   
    }
}
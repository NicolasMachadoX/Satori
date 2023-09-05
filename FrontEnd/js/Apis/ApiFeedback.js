const url = 'http://localhost:8787/api/feedback';

//GetAll

export const publis = async () =>{
    try {
        
        const data = await fetch(`${url}`);
        const result = data.json();
        return result;
    } catch (error) {
     console.log(error);   
    }
}

export const publicacion = async (id) =>{
    try {
       const data = await fetch(`${url}/${id}`);
       const result = data.json();
       return result;
    } catch (error) {
     console.log(error);   
    }
}

export const insertar = async (post) =>{
    try {
        await fetch(url,{
            method:'POST',
            body:JSON.stringify(post),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href='Feedback.html'
    } catch (error) {
     console.log(error);   
    }
}

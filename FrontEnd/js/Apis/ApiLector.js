const url = 'http://localhost:8787/api/lector';

//GetAll

export const mangas = async () =>{
    try {
        
        const data = await fetch(`${url}`);
        const result = data.json();
        return result;
    } catch (error) {
     console.log(error);   
    }
}

export const manga = async (id) =>{
    try {
       const data = await fetch(`${url}/${id}`);
       const result = data.json();
       return result;
    } catch (error) {
     console.log(error);   
    }
}

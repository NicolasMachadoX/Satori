const url = 'http://localhost:8787/api/libro';

//GetAll

export const libros = async () =>{
    try {
        
        const data = await fetch(`${url}`);
        const result = data.json();
        console.log(result);
        return result;
    } catch (error) {
     console.log(error);   
    }
}


export const libro = async (pagina) =>{
    try {
        const nombreX = localStorage.getItem("nombreManga");
       const data = await fetch(`${url}/${nombreX}/${pagina}`);
       const result = data.json();
       return result;
    } catch (error) {
     console.log(error);   
    }
}

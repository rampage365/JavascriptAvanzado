//! GOOD READS API 
//* DOCUMENTACIÓN: https://goodreads-devf-aaron.herokuapp.com/docs/
//* URI DE LA API: https://goodreads-devf-aaron.herokuapp.com/api/v1/

// TRAER A LOS PAQUETES QUE ACABAMOS DE INSTALAR REQUEST & COLORS
const request = require ('request')
var color = require ('colors')

//TENER NUESTRO ENDPOINT 
const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'


// LISTAR A TODOS LOS AUTORES (AUTHORS)
const listAuthors = () => {
  request.get(URI, (error, response, body) => {
    if(response.statusCode === 200){
        const authors = JSON.parse(body)
        console.log(authors)
    }else{
        console.log(response.statusCode , response.statusMessage)
        //EJEMPLO: 404 NOT FOUND
    }
  })
}

// LISTAR UN AUTOR POR ID 
const getAuthor = (id) => {
    request.get(URI+id+'/', (error,response,body)=>{
        if(response.statusCode === 200){
            const author = JSON.parse(body)
            console.log(author)
        }else{
            console.log("ID NO VALIDO ", response.statusCode, response.statusMessage.red)
            //EJEMPLO: 404 NOT FOUND
        }
    })
}

//CREAR UN AUTOR - USAMOS UN OBJETO CON MI INFORMACIÓN A CREAR, PARA ELLO NECESITAMOS USAR FORMATO JSON
//const jsonSend = {
//	"name": "Ivonne",
//	"last_name": "Mendoza",
//	"nacionalidad": "MX",
//	"biography": "model",
//	"gender": "F",
//	"age": 25,
//	"is_alive": true
//}

// función createAuthor (jsonData)
const createAuthor = (jsonData) => {
    const objConfig = {
         url: URI, //aparatdo para crear el autor /api/v1/authors/
         form: jsonData //la data en formato JSON
    }

   request.post(objConfig, (error,response,body)=> {
       if(response.statusCode === 201){
            const author = JSON.parse(body)
            console.log("EL AUTOR FUE CREADO EXITOSAMENTE\n".green , author)
       }else{
        console.log(response.statusCode, response.statusMessage.magenta)
        // 404 NOT FOUND
       }
   }) 
}



module.exports = {
    listAuthors,
    getAuthor,
    createAuthor
}
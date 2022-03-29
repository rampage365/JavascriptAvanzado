/**
 * POKEAPI
 * URL:https://swapi.dev/api/
 * END POINT
 * https://swapi.dev/api/people/
 */

/**
 * traemos request y colors que instalamos
 */
 const request = require('request');
 var   colors = require('colors');
 
 /**
  * delcaro mi URI de mi API
 */
 const URI = 'https://swapi.dev/api/people/';
 
 function getNamePeopleByID(numberPeople) {
     //es buena practica revisar si la API es sensible a caracteres MAYUSCULA o MINUSCULA
     //la pokeapi no lo es, si hacia fuera, utilizar lowercase o uppercase
     request.get(URI+numberPeople,function(error,response,body){
         //validar si mi peticion es exitosa, devuelveme la data
         if (response.statusCode === 200) {
             //parse convierte el body devuelto en un json
             const bodyEnFormatoJSON = JSON.parse(body)
 
             //recorremos el JSON hasta dar con los datos que queremos
             //cuando consumimos un API usaremos bastante .MAP() y .FILTER()
             const namePeople = bodyEnFormatoJSON.name
             
 
             console.log(`El nombre de la persona con ID: ${numberPeople} es : ${namePeople} \n`.green)
         
         } else {
             //si el codigo de estado es cualquier otro muestrame el mensaje de error
             console.log(`Ocurrio un error : ${response.statusCode} ${response.statusMessage}`.red)
         }
     })
 
 }
 
getNamePeopleByID(13)
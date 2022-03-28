/**
 * POKEAPI
 * URL:https://pokeapi.co/api/v2/
 * END POINT
 * https://pokeapi.co/api/v2/pokemon/pikachu
 */

/**
 * traemos request y colors que instalamos
 */
const request = require('request');
var   colors = require('colors');

/**
 * delcaro mi URI de mi API
*/
const URI = 'https://pokeapi.co/api/v2/pokemon/';

function getPokemonTypeByName(namePokemon) {
    //es buena practica revisar si la API es sensible a caracteres MAYUSCULA o MINUSCULA
    //la pokeapi no lo es, si hacia fuera, utilizar lowercase o uppercase
    request.get(URI+namePokemon,function(error,response,body){
        //validar si mi peticion es exitosa, devuelveme la data
        if (response.statusCode === 200) {
            //parse convierte el body devuelto en un json
            const bodyEnFormatoJSON = JSON.parse(body)

            //recorremos el JSON hasta dar con los datos que queremos
            //cuando consumimos un API usaremos bastante .MAP() y .FILTER()
            const typePokemon = bodyEnFormatoJSON.types.map(
                (objeto)=>objeto.type.name
            )

            console.log(`El tipo de Pokemo de ${namePokemon} es de : ${typePokemon} \n`.green)
        
        } else {
            //si el codigo de estado es cualquier otro muestrame el mensaje de error
            console.log(`Ocurrio un error : ${response.statusCode} ${response.statusMessage}`.red)
        }
    })

}

getPokemonTypeByName('pikachu')
getPokemonTypeByName('charmander')
getPokemonTypeByName(13)
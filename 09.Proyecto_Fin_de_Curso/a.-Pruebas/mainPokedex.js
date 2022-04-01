console.log("Proyecto de Fin de curso POKEAPI")

class classArraryNameAndUrlPokemones{
    constructor(name,url){
        this.name=name;
        this.url=url;
    }
}
const arraryNameAndUrlPokemones = new Array();
//para saber si se encontraron o no asteroides



//para la lista de pokemones 476
class classArrayPokemones{
    constructor(id,nombre,arrayEvoluciones = new Array()){
        this.id=id;
        this.nombre=nombre;
        this.arrayEvoluciones=arrayEvoluciones;
    }
}
const arrayPokemones = new Array();

/* var array = new Array()
array.push("uno")
array.push("dos")
array.push("tres")
const pruebas = new classArrayPokemones(1,"prueba",array);
arrayPokemones.push({...pruebas})
console.log(arrayPokemones)
console.log(arrayPokemones[0].arrayEvoluciones) */




//VARIABLES GLOBALES PARA IMPRIMIR UNA CANTIDAD
let cantidadDePokemones = 0;
let indiceDePokemones = 1;

/***************************************************
START FUNCION 
****************************************************/
/**
 * el limite sirve para saber cuantos pokemones debo traerme es decir debo traerme 200 pokemones
 * offest sirve para saber a partir de que numero de pokemon, en est caso traeriamos del numero 100 en adelante es decir del 100 al 300
 * https://pokeapi.co/api/v2/pokemon?limit=200&offset=100
 */

var listaPokemones = async(cantidadPokemones,desdeIndicePokemones)=>{
    //Obtenindo los ids de los meteoritos peligrosos
    var respuestaPokeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${cantidadPokemones}&offset=${desdeIndicePokemones}`)
    var listaDePokemones = await respuestaPokeAPI.json()
    Object.keys(listaDePokemones.results).forEach(object =>{
        var recorriendoListaPokemones = listaDePokemones.results[object]
            /* console.log(recorriendoListaPokemones.name)
            console.log(recorriendoListaPokemones.url)
            console.log(" ") */
            const datos = new classArraryNameAndUrlPokemones(recorriendoListaPokemones.name,recorriendoListaPokemones.url);
            //console.log(datos)
            arraryNameAndUrlPokemones.push({...datos})
            traerPokemonesPorURL(recorriendoListaPokemones.url);

    })
    console.log(arraryNameAndUrlPokemones)    
}

//listaPokemones(5,0)

/**************************************************************************************
START FUNCION OBTENIENDO 
**************************************************************************************/
var traerPokemonesPorURL = async(URL)=>{

       var respuestaUrl = await fetch(URL)
       var datosPokemon = await respuestaUrl.json()
       console.log("*****************************************")
       console.log("id : " +datosPokemon.id)
       console.log("nombre : " +datosPokemon.name)
       console.log("peso : " + (datosPokemon.weight)/10 + " kg")

       altura = (datosPokemon.height).toString()
       if (altura.length>=2) {
           //console.log(altura)
           console.log("altura : " + (datosPokemon.height/10) + " m")
       } else {           
           console.log("altura : " + (datosPokemon.height*10) + " cm")
       }
       console.log("imagenurl : " + datosPokemon.sprites.other["official-artwork"].front_default)

       console.log("tipo : " + datosPokemon.types[0].type.name)

}


/**************************************************************************************
START FUNCION OBTENIENDO limite 898
**************************************************************************************/

var traerPokemonesPorNombre = async(nombreConsulta)=>{
    //Obtenindo los ids de los meteoritos peligrosos
    var respuestaNombre = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreConsulta}`)
    var datosPokemon = await respuestaNombre.json()
       //console.log("*****************************************")
       console.log("id : " +datosPokemon.id)
       console.log("nombre : " +datosPokemon.name)
       console.log("peso : " + (datosPokemon.weight)/10 + " kg")

       altura = (datosPokemon.height).toString()
       if (altura.length>=2) {
           //console.log(altura)
           console.log("altura : " + (datosPokemon.height/10) + " m")
       } else {           
           console.log("altura : " + (datosPokemon.height*10) + " cm")
       }
       console.log("imagenurl : " + datosPokemon.sprites.other["official-artwork"].front_default)

       console.log("tipo : " + datosPokemon.types[0].type.name)
}




/**************************************************************************************
START FUNCION OBTENIENDO limite 476
**************************************************************************************/
var consultaPokemones = async()=>{
    //Obtenindo los ids de los pokemones desde el ENDPOINT  https://pokeapi.co/api/v2/evolution-chain/
    if (indiceDePokemones==1) {
        
    } else {
        indiceDePokemones+=1;
    }
    
    for (indiceDePokemones; indiceDePokemones <= cantidadDePokemones; indiceDePokemones++) {
                
        var respuestaPokeAPI = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${indiceDePokemones}`)
        var datosPokemon = await respuestaPokeAPI.json()
        console.log("***********************************************************************")
        console.log("id : " +datosPokemon.id)
        console.log("nombre : " +datosPokemon.chain.species.name)
        let evoluciones = 0
        var array = new Array()
        endPoint = datosPokemon.chain
        do {
            evoluciones++;
            console.log(evoluciones +  " evolucion : " + endPoint.evolves_to[0].species.name)
            array.push(endPoint.evolves_to[0].species.name)
            endPoint = endPoint.evolves_to[0]
        } while (endPoint.evolves_to[0]);


        const pruebas = new classArrayPokemones(datosPokemon.id, datosPokemon.chain.species.name, array);
        arrayPokemones.push({...pruebas})
        


        if (evoluciones==0) {
            console.log("Este pokemon no tiene evoluciones")
        } else {           
            console.log("Fin de evolucion")
        }
        evoluciones = 0
        console.log("***********************************************************************")

    }

    console.log(arrayPokemones)

}

cantidadDePokemones = 20;
indiceDePokemones = 1;


//listaPokemones(cantidad,desdeNum)
//traerPokemonesPorURL()
//traerPokemonesPorNombre("nombre")

//consultaPokemones()










//Probando la consulta ASTEROIDES 1900-03-08  2200-11-26
//asteroides('1900-03-08','1900-03-14')
//console.log('1900-03-08' < '1888-03-08' ? true:false)
/* var fechaUno = '1900/03/08'
var fechaDos = '1900/03/09'
var nose =  fechaDos - fechaUno
console.log(nose) */


/***************************************
START FUNCION TRAER ASTEROIDES PELIGROSO
***************************************/



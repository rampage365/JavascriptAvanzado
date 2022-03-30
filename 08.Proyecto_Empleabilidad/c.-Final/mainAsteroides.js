console.log("Proyecto de Empleabilidad")
const keyAPI = "n6jKxpqdXbqFMIldrFHwbm5j9rag99ZrdCRCHvWh"

class classAsteroide{
    constructor(id,nombre,year,diametro){
        this.id=id;
        this.nombre=nombre;
        this.year=year;
        this.diametro=diametro;
    }
}

const arraryAsteroides=[];
//var contador=3;
let contador=3;
let datos;

const arrayAsteroides = new Array();

var asteroides = async(startDate,endDate)=>{
    //Obtenindo los ids de los meteoritos peligrosos
    var respuesta1 = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${keyAPI}`)
    var meteoritos = await respuesta1.json()
    Object.keys(meteoritos.near_earth_objects).forEach(object =>{
        const asteroides = meteoritos.near_earth_objects[object]
        asteroides.forEach(peligrosos=>{
            if(peligrosos.is_potentially_hazardous_asteroid === true){
                
                console.log(`El asteroide ${peligrosos.name} es potencialmente peligroso para la Tierra y se acerca en la fecha ${peligrosos.close_approach_data[0].close_approach_date_full}`)
                
                arrayAsteroides.push(peligrosos.neo_reference_id)
                asteroidesPeligrosos(peligrosos.neo_reference_id);
                
            }else{
                //console.log(`El asteroide ${peligrosos.name} no representa una amenaza`)
            }    
        })
    })
    console.log(arrayAsteroides)    
}

/**
 * OBTENIENDO LOS DATOS de los meteoritos peligrosos
 */
var asteroidesPeligrosos = async(arrayAsteroides)=>{

       var respuesta2 = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${arrayAsteroides}?api_key=${keyAPI}`)
       var meteoritosPeligrosos = await respuesta2.json()
       console.log(meteoritosPeligrosos)
/*        console.log(meteoritosPeligrosos.designation)
 */       /* console.log(meteoritosPeligrosos.close_approach_data[0].close_approach_date_full) */
       /* console.log(meteoritosPeligrosos.estimated_diameter.meters.estimated_diameter_min)
       console.log(meteoritosPeligrosos.estimated_diameter.meters.estimated_diameter_max) */
       
        const asteroidePeligroso = new classAsteroide(arrayAsteroides,meteoritosPeligrosos.designation,meteoritosPeligrosos.close_approach_data[0].close_approach_date_full,meteoritosPeligrosos.estimated_diameter.meters.estimated_diameter_min.toFixed(2) + `m` + ` x ` + meteoritosPeligrosos.estimated_diameter.meters.estimated_diameter_max.toFixed(2) + `m`);
        console.log(asteroidePeligroso)
        arraryAsteroides.push({...asteroidePeligroso})

       document.getElementById("body-table-id").innerHTML += `
                    <tr id="${asteroidePeligroso.id}" class="tr-table-campos">
                        <td id="id-table-id" class="campos-table-id">${asteroidePeligroso.id}</td>
                        <td class="campos-table-nombre">${asteroidePeligroso.nombre}</td>
                        <td class="campos-table-anio">${asteroidePeligroso.year}</td>
                        <td class="campos-table-precio">${asteroidePeligroso.diametro}</td>
                        <td class="campos-table-boton"><input class="botonBorrar" type="button" value="Borrar" onclick="borrarDisco(${asteroidePeligroso.id})"></td>
                    </tr>`

}

//Probando la consulta ASTEROIDES
asteroides('2022-03-10','2022-03-15')

/************************************
START FUNCION TRAER ASTEROIDES
*************************************/
function agregarDisco() {
    nombreDisco = document.getElementById("disc-name-id").value;
    anioDisco = document.getElementById('number-anio-id').value;
    precioDisco = document.getElementById('number-precio-id').value;
    let divError = document.getElementById('aviso-id');
    divError.classList.remove('exito');   
    divError.classList.remove('mostrar');         
    divError.classList.add('ocultar');
    if (nombreDisco.length && anioDisco.length && precioDisco.length) {
        function lTrim(sStr){//Script que elimina el espacio de izquierda
            while (sStr.charAt(0)== " ")
            sStr = sStr.substr(1, sStr.length - 1);
            return sStr;
            }
        nombreDisco = lTrim(nombreDisco);
        if (Number(anioDisco)>=1878) {
            console.log("si es un año y mayor que 1878") 
            if (Number(precioDisco)>0) {
                console.log("tiene precio mayor que cero") 
                //console.log(disco.nombre.length)
                if (nombreDisco.length>0) {
                    console.log("contador = " + contador)
                    console.log("tiene nombre")
                    //agregamos
                    const discos = new Disco(contador,nombreDisco,anioDisco,precioDisco);
                    Discs.push({...discos})
                    contadorNumerico = contador+1;
                    document.getElementById("body-table-id").innerHTML += `
                    <tr id="${contador}" class="tr-table-campos">
                        <td id="id-table-id" class="campos-table-id">${contadorNumerico}</td>
                        <td class="campos-table-nombre">${nombreDisco}</td>
                        <td class="campos-table-anio">${anioDisco}</td>
                        <td class="campos-table-precio">${precioDisco}</td>
                        <td class="campos-table-boton"><input class="botonBorrar" type="button" value="Borrar" onclick="borrarDisco(${contador})"></td>
                    </tr>`

                    contador++;
                    limpiarUno=document.getElementById("disc-name-id");
                    limpiarUno.value ="";
                    limpiarDos=document.getElementById("number-precio-id");
                    limpiarDos.value ="";
                    limpiarTres=document.getElementById("number-anio-id");
                    limpiarTres.value ="";
                } else {
                    console.log("El disco no tiene nombre") 
                    let HTMLString = `(El disco no tiene nombre)`;
                    divError.innerHTML = HTMLString;
                    divError.classList.remove('ocultar');
                    divError.classList.remove('exito');
                    divError.classList.add('mostrar');
                    limpiarUno=document.getElementById("disc-name-id");
                    limpiarUno.value ="anonimo";
                }
            } else {
                console.log("El precio del disco tiene que ser mayor a cero") 
                let HTMLString = `(El precio del disco tiene que ser mayor a cero)`;
                divError.innerHTML = HTMLString;
                divError.classList.remove('ocultar');
                divError.classList.remove('exito');
                divError.classList.add('mostrar');
                limpiarUno=document.getElementById("number-precio-id");
                limpiarUno.value =0.1;
            }
        } else {
            console.log("El disco tiene un año menor a su invencion")
            let HTMLString = `(El disco tiene un año menor a su invencion)`;
            divError.innerHTML = HTMLString;
            divError.classList.remove('ocultar');
            divError.classList.remove('exito');
            divError.classList.add('mostrar');
            limpiarUno=document.getElementById("number-anio-id");
            limpiarUno.value =1878;
        }
        
    } else {
        let HTMLString = `(Ingresa todos los datos)`;
        divError.innerHTML = HTMLString;
        divError.classList.remove('ocultar');
        divError.classList.remove('exito');
        divError.classList.add('mostrar');
        console.log("ingresa todos los datos")
    }
}

/************************************
START FUNCION ELIMNAR DISCOS
*************************************/

function borrarDisco(id) {
    console.log("*********comienzo borrar******" )
    console.log("id de borrar = " + id)
    
    const resultadoLineal = busquedaLineal(Discs,id)
    if (resultadoLineal>=0){ 
        console.log(`Si existe tu numero y esta en la posicion ${resultadoLineal} del array`)
        Discs.splice(resultadoLineal,1)
        idDiscoBorrar = document.getElementById(id).remove();
            
        imprimirTodosLosDiscos(Discs);
    }
    if (resultadoLineal === "")
    {
        console.log("NO EXISTE ")
    }
    console.log("resultadoLineal = " + resultadoLineal)
    console.log("" )

}

const busquedaLineal = (lista, elementoAbuscar)=>{
    console.log("**************comienzo blineal************************" )
    console.log("buscando lista = " + lista)
    console.log("buscando elemnto = " + elementoAbuscar)
    const size = lista.length;
    console.log("tamaño lista = " + size)
    let index = 0;
    while (index < size){
        
        if (lista[index].id === elementoAbuscar){
            console.log("encontrado en posicion = " + index)  
            console.log("**************fin blineal***********************" )
            return index;  
        }
        index++
    }
    console.log("*****************fin blineal********************" )
    return ""
}

/************************************
START FUNCION IMPRIMIR DOM DISCOS
*************************************/
function imprimirTodosLosDiscos(listaDiscos) {

    idDiscoBorrar = document.getElementById("body-table-id").remove();

    document.getElementById("table-table-id").innerHTML += `
    <tbody id="body-table-id" class="body-table">
    </tbody>`
    
    console.log("contador = " + contador)
    contador=0;

    listaDiscos.forEach(element => {
        document.getElementById("body-table-id").innerHTML += `
        <tr id="${contador}" class="tr-table-campos">
            <td id="id-table-id" class="campos-table-id">${contador+1}</td>
            <td class="campos-table-nombre">${element.nombre}</td>
            <td class="campos-table-anio">${element.year}</td>
            <td class="campos-table-precio">${element.precio}</td>
            <td class="campos-table-boton"><input class="botonBorrar" type="button" value="Borrar" onclick="borrarDisco(${contador})"></td>
        </tr>`
        contador++;        
    });
    console.log("contador = " + contador)
}



function borrarBusqueda() {

    imprimirTodosLosDiscos(Discs);
    nombreDiscoBuscar = document.getElementById("disc-buscar-id");
    nombreDiscoBuscar.value = "";

    let divError = document.getElementById('input-boton-buscar-disco2');
    divError.classList.add('ocultar');

    let divError2 = document.getElementById('input-boton-buscar-disco');
    divError2.classList.remove('ocultar');  
}




function buscarDisco() {
    console.log("**********comienzo buscar******" )
    nombreDiscoBuscar = document.getElementById("disc-buscar-id").value;
    function lTrim(sStr){//Script que elimina el espacio de izquierda
        while (sStr.charAt(0)== " ")
        sStr = sStr.substr(1, sStr.length - 1);
        return sStr;
        }
    nombreDiscoBuscar = lTrim(nombreDiscoBuscar);
    if (nombreDiscoBuscar.length>0) {
        console.log("contador = " + contador)
        console.log("hay nombre disco")
        console.log("nombreDiscoBuscar = " + nombreDiscoBuscar)

        nombreDiscoBuscar = nombreDiscoBuscar.toLowerCase()
        console.log("nombreDiscoBuscar = " + nombreDiscoBuscar)

        bandera=true

        Discs.forEach(element => {

            let nombreMinimizado = element.nombre.toLowerCase();
            if (nombreMinimizado.indexOf(nombreDiscoBuscar) !== -1) {

                console.log("borramos y agregamos tabla body = " + contador)

                idDiscoBorrar = document.getElementById("body-table-id").remove();

                document.getElementById("table-table-id").innerHTML += `
                <tbody id="body-table-id" class="body-table">|
                </tbody>`

                document.getElementById("body-table-id").innerHTML += `
                <tr id="${element.id}" class="tr-table-campos">
                    <td id="id-table-id" class="campos-table-id">${element.id+1}</td>
                    <td class="campos-table-nombre">${element.nombre}</td>
                    <td class="campos-table-anio">${element.year}</td>
                    <td class="campos-table-precio">${element.precio}</td>
                    <td class="campos-table-boton"><input class="botonBorrar" type="button" value="Borrar" onclick="borrarDisco(${element.id})"></td>
                </tr>`

                let divError = document.getElementById('input-boton-buscar-disco');
                divError.classList.add('ocultar');

                let divError2 = document.getElementById('input-boton-buscar-disco2');
                divError2.classList.remove('ocultar');  

                bandera=false

                console.log("El disco se encontro") 
                console.log("contador = " + contador)
                let divError3 = document.getElementById('aviso-buscar-id');
                divError3.classList.remove('mostrarerror');   
                divError3.classList.add('ocultarerror');
                               
            }           
            
            
        });
        
        if (bandera) {
            console.log("El disco no se encontro") 
            console.log("contador = " + contador)
            let divError = document.getElementById('aviso-buscar-id');
            let HTMLString = `El disco no se encontro`;
            divError.innerHTML = HTMLString;
            divError.classList.remove('ocultarerror');   
            divError.classList.add('mostrarerror');
           
        }
       
    }
            
    else {
        console.log("El disco no tiene nombre") 
        console.log("contador = " + contador)
        let divError = document.getElementById('aviso-buscar-id');
        let HTMLString = `(Ingrese un nombre)`;
        divError.innerHTML = HTMLString;
        divError.classList.remove('ocultarerror');   
        divError.classList.add('mostrarerror');
        limpiarTres=document.getElementById("aviso-buscar-id");
        limpiarTres.value ="anonimo";
    }
    
    console.log("fin buscar")
}
















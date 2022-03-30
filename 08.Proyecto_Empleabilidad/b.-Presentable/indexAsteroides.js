console.log("Proyecto de Empleabilidad")
const keyAPI = "n6jKxpqdXbqFMIldrFHwbm5j9rag99ZrdCRCHvWh"

//importamos la libreria fetch
//import fetch from "node-fetch"
/*

const respuesta = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-03-10&end_date=2022-03-16&api_key=${keyAPI}`)

const meteoritos = await respuesta.json()*/

//fotos de marte https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY
/*
Object.keys(meteoritos.near_earth_objects).forEach(object =>{
	const asteroides = meteoritos.near_earth_objects[object]
	asteroides.forEach(peligrosos=>{
		if(peligrosos.is_potentially_hazardous_asteroid === true){
			
			console.log(`El asteroide ${peligrosos.name} es potencialmente peligroso para la Tierra y se acerca en la fecha ${peligrosos.close_approach_data[0].close_approach_date_full}`)
		}else{
			console.log(`El asteroide ${peligrosos.name} no representa una amenaza`)
		
		}
	
	
	})



})*/



/* const marteConsulta = async(rover)=>{
	const informacion = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity&api_key=${keyAPI}`)
	const info = await informacion.json()
	console.log(info)
}
var roverS = ""
function seleccion (){
	let seleccionOpciones = document.getElementById("opcionesSeleccion")
	roverS = seleccionOpciones.value
	//marteConsulta(roverS)
	console.log(roverS)
	
}

function seleccion2 (){
	let seleccionOpciones = document.getElementById("opcionesSeleccion2")
	var selcamera = seleccionOpciones.value
	console.log(selcamera)
	marte(roverS,selcamera)
	
	
}





const marte = async(rover,camara)=>{
var respuestaFotos = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.toLowerCase()}/photos?sol=1000&page=1&camera=${camara.toLowerCase()}&api_key=${keyAPI}`)
	var {photos : fotosMarte} = await respuestaFotos.json()
//console.log(fotosMarte.photos[0].img_src)
	var d  = document.getElementById("tarjeta")
	
	while (d.firstChild) {
  		d.removeChild(d.firstChild);
		}
	
	fotosMarte.forEach((foto) =>{
	
	
		document.getElementById("tarjeta").innerHTML += `
			<div class= "relative border rounded shadow" id ="hijo">
				<img src=${foto.img_src} alt=${foto.id} class="rounded " />
				<div class="bg-white opacity-70 p-5 absolute bottom-0 text-black font-bold flex flex-col">
    					<span>${foto.earth_date}</span>
    					<span>${foto.camera.name}</span>
    
    						</div>
			
			</div>
	`
	
	
	})
	
} */





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
                
                /* document.getElementById("grid-container").innerHTML += `
                
                    <img src=${foto.img_src} alt=${foto.id} class="rounded " />
                    <!--<div class="bg-white opacity-70 p-5 absolute bottom-0 text-black font-bold flex flex-col">
                            <span>${foto.earth_date}</span>
                            <span>${foto.camera.name}</span>
                    </div> -->
                ` */
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
   
       

   

}


asteroides('2022-03-10','2022-03-15')
















console.log("Este es un ejemplo que consume una API de la NASA usando FETCH")
const keyAPI = "B4M0OPihTC0U7OFZcfj6PTizGQlDsl21351VamA7"

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



const marte = async(i)=>{
const respuestaFotos = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&camera=MAST&api_key=${keyAPI}`)
	const fotosMarte = await respuestaFotos.json()
//console.log(fotosMarte.photos[0].img_src)
	var imagen = document.createElement("img")
	imagen.id = "primeraFoto"
	var imagenURL = fotosMarte.photos[i].img_src
	document.getElementById("tarjeta").appendChild(imagen)
	document.getElementById(imagen.id).src = imagenURL
	console.log(fotosMarte.photos[i].camera.full_name)
	console.log(fotosMarte.photos[i].rover)
	var petiqueta=document.createElement("h2")
	petiqueta.innerHTML = `Esta foto fue tomada  por ${fotosMarte.photos[i].rover.name} con su camara ${fotosMarte.photos[i].camera.full_name} el día ${fotosMarte.photos[i].earth_date}`
	document.getElementById("tarjeta").appendChild(petiqueta)
}

marte(1)























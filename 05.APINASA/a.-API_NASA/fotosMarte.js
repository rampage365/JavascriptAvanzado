console.log('Este es un ejemplo consumiendo un API usando FETCH y AWAIT para fotos del robert')

//import fetch from "node-fetch"


const keyAPI = "n6jKxpqdXbqFMIldrFHwbm5j9rag99ZrdCRCHvWh";

/**
 * CALLBACK: simepre necesario cuando vamos a ejecutar con html...
 * si es con node no hay problema
 */
const marte = async(i)=>{

    const respuestaFotos = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=50&page=1&camera=MINITES&api_key=${keyAPI}`)

    const fotosMarte = await respuestaFotos.json();
    console.log(fotosMarte.photos[i].img_src)
    
    const main = document.getElementById("main");
    
    var cuadroImagen = document.createElement('img')
    
    cuadroImagen.src =  fotosMarte.photos[i].img_src
    main.appendChild(cuadroImagen)

    const parrafoMensaje = document.createElement('p')
    parrafoMensaje.innerHTML = `Esta foto fue tomada por <strong> ${fotosMarte.photos[i].rover.name}</strong>  con su camara <strong>  ${fotosMarte.photos[i].camera.full_name}</strong>  en la siguiente fecha <strong>  ${fotosMarte.photos[i].earth_date}</strong>  `;
    main.appendChild(parrafoMensaje)


    console.log(fotosMarte.photos[i].camera)
    console.log(fotosMarte.photos[i].rover)
    /* var imagen = document.createElement("img")
    imagen.id="primeraFoto"
    var imagenURL = fotosMarte.photos[i].img_src
    document.getElementById("main").appendChild(imagen)
    document.getElementById(imagen.id).src = imagenURL */




    
}

marte(5)
 
/* Object.keys(meteoritos.near_earth_objects).forEach(
    object=>{
        const asteroides = meteoritos.near_earth_objects[object]
        asteroides.forEach(
            peligrosos=>{
                if (peligrosos.is_potentially_hazardous_asteroid === true) {
                    console.log(peligrosos.close_approach_data[0])
                    console.log(`El asteroide ${peligrosos.name} es potencialmente peligroso y se acerca a la tierra en la fecha ${peligrosos.close_approach_data[0].close_approach_date_full} `)
                } else {
                    console.log(`El asteroide ${peligrosos.name} no es potencialmente peligroso para la tierra`)
                }
            }
        )
    }
) */
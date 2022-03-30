console.log('Este es un ejemplo consumiendo un API usando FETCH')

import fetch from "node-fetch"

const keyAPI = "n6jKxpqdXbqFMIldrFHwbm5j9rag99ZrdCRCHvWh";
const respuesta = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-03-20&end_date=2022-03-25&api_key=${keyAPI}`)

const meteoritos = await respuesta.json();
console.log(meteoritos.near_earth_objects)

Object.keys(meteoritos.near_earth_objects).forEach(
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
)
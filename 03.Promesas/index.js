console.log("Promesas")

//Promesa 
// Una promesa es un objeto que representa un valor que puede que este disponible ahora o en futuro, o que nunca lo este. 
// Como no se sabe cuando lo va estar , todas las operaciones pendientes de ese valor, tendran que esperarse.
//Promesa, recibe dos argumentos, resolve y reject. Estos argumentos son callblacks que se ejecutan dentro de la promesa



//Ejemplo de promesa

const promesaRandom= ()=>{
	return new Promise((resolve,reject)=>{
	const numero = Math.ceil(Math.random()*10)
	setTimeout(()=> numero>=5?resolve(numero):reject(new Error(`El numero ${numero}es menor a 5`)),2000)

})
}

//Para ejecutar una promesa, accedemos a .then() para recibir la resolucion, y .catch() para recibir el rechazo
promesaRandom()
	.then(numero =>{
	console.log(numero)
	console.log("sigue async y await")
} )
	.catch(error => console.log(error + "y ahora va async y await"))

// Otra forma para acceder a la promesa es usando async y await
const respuestaPromesaRandom = async ()=>{
	try{
		const respuesta =await promesaRandom()
		console.log(respuesta)
} catch(e){
		console.log(e)
}

}

respuestaPromesaRandom()

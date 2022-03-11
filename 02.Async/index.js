// Codigo síncrono o secuencial
/*console.log(1)
console.log(2)
console.log(3)


//Código asíncrono

console.log(1)
setTimeout(()=> console.log(2),4000)
console.log(3)


//EJEMPLO DE CALL STACK : Javascript ejecuta los procesos síncronos en primera instancia, y los asíncronos los mana a la pila de ejecucion o "CALL STACK"

const terceraFuncion = ()=>{
	console.log("Saludos desde la tercera funcion")
}


const segundaFuncion = ()=>{
	terceraFuncion()
	console.log("Saludos desde la segunda funcion")
}

const primeraFuncion = ()=>{
	segundaFuncion()
	console.log("Saludos desde la primera funcion")
}

primeraFuncion()
*/
console.log(1);
setTimeout(()=>{
	return console.log(2)

},2000);

for(let i=0;i<99; i++);
console.log(3);

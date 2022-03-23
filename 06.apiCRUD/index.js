//NUESTRO INDEX PRINCIPAL
const goodReadsCrud = require ('./crudAuthors.js')

//Listo mis autores 
// goodReadsCrud.listAuthors()

//Ver un Author
// goodReadsCrud.getAuthor(14712) //14567 , //17060

// CREAR UN AUTOR 
const jsonSend = {
    name: "Juan",
	last_name: "Ramirez",
	nacionalidad: "MX",
	biography: "Escritor",
	gender: "M",
	age: 30,
	is_alive: true
}

goodReadsCrud.createAuthor(jsonSend)
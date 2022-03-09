var colors = require ('colors') //paquete/dependencia/libreria colors que instalamos de npm

function Sumar(x,y){
    let suma = x+y
    console.log("la suma es: ".yellow + suma)
}
Sumar(4,4)

for (let i=0; i<5; i++){
    console.log("hola mundo".red)
}

for (let j=1; j<10; j++){
    console.log(`tabla de multiplicar ${j} * 2: `.magenta + j*2)
}
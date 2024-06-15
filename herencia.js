class vehiculo{
    constructor(color, marca, modelo ){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar(){
        console.log(`El vehiculo a arrancado.`);
    }
}

class Carro extends vehiculo{
    
    constructor(color, marca, modelo, numpertas){
        super(color, marca, modelo);
        this.numpertas = numpertas;
    }
    
    abrirpuertas(){
        console.log(`se han abierto las ${this.numpertas} del carro.`);
    }
}

const micarro = new Carro ('azul neon', 'chevrolet', 'spark gt', 5);

console.log(micarro.color);
console.log(micarro.numpertas);
micarro.arrancar();
micarro.abrirpuertas();
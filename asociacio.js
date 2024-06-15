class motor{
    constructor(tipo, cilindrada){
        this.tipo=tipo;
        this.cilindrada=cilindrada;
    }
    iniciar(){
        console.log(`motor ${this.tipo} de  ${this.cilindrada}cc, encendido`);
    }
    detener(){
        console.log(`motor ${this.tipo} apagado`);
    }
}
class carro {
constructor(color, marca, modelo, numpuertas, motor){
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.numpuertas = numpuertas;
    //asociacion de la clase 
    this.motor = motor;
    }

    //metodo para mostrar los detaller del carro, incluyendo los del motor 

    mostrardetalles(){
        console.log(`carro ${this.marca} ${this.modelo}, color ${this.color}, numero de puertas ${this.numpuertas}`);
        console.log(`motor: ${this.motor.tipo} ${this.motor.cilindrada} cc`);
        
    }

    arrancar(){
        this.motor.iniciar();
        console.log(`El carro ${this.marca} ${this.modelo} ha arrancado`);
    }

    detener(){
        this.motor.detener();
        console.log(`el carro ${this.marca} ${this.modelo} se ha dentenido`);
    }

}

//instanciando las clases llamadando las clases 

const motorcarro = new motor('gasolina', 1100);

const micarro = new carro('rojo', 'renault', '4', 3, motorcarro);

//uso de los metodos para interactuar con el carro y el motor 

micarro.mostrardetalles();

micarro.arrancar();

micarro.detener();

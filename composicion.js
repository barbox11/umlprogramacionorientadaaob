class motor{
    constructor(tipo, cilindrada){
        this.tipo = tipo;
        this.cilindrada = cilindrada;
    }
    iniciar(){
        console.log(`motor ${this.tipo} ( ${this.cilindrada} cc)  iniciado`);
    }
    
    detener(){
        console.log(`motor ${this.tipo} apagado.`);
    }
}

class carro{
    constructor(color, marca, modelo, numpuertas, motor){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.numpuertas = numpuertas;
        // composicion de la clase motor
        this.motor = motor;
    }
    mostrardetalle(){
        console.log(`carro ${this.marca} ${this.modelo}, color:${this.color}, num de puertas: ${this.numpuertas}`);
        console.log(`motor ${this.motor.tipo} - ${this.motor.cilindrada} cc`);
    }
}

const motorcarro = new motor('gasolina', 2000);

const micarro = new carro ('verde', 'mercedes', '2024', 3, motorcarro);

micarro.mostrardetalle();

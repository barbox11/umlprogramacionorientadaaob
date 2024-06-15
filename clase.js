class carro{

    constructor(marca,  modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;

    }
    arrancar(){
        console.log(`${this.marca} ${this.modelo} ah arranacado`);
    }

    detener(){
        this.velocidadActual = 0;
        console.log(`${this.marca} ${this.modelo} se ha detenido`);
    }

    acelerar(velocidad){
        this.velocidadActual +=velocidad;
        console.log(`${this.marca} ${this.modelo} ha caelerado a ${this.velocidadActual}km/h`);
    } 
    frenar(velocidad){
        this.velocidadActual -=velocidad;
        if (this.velocidadActual < 0){
            this.velocidadActual = 0;
        }
        console.log(`${this.marca} ${this.modelo} ha frenado ${this.velocidadActual}km/h`);
    }
}

let micarro =  new carro('toyota', 'corolla');

micarro.arrancar();
micarro.acelerar(100);
micarro.frenar(30);
micarro.detener();
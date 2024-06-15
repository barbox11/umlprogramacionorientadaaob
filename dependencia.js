class Carro{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.estado = 'funcionando';

    }
    mostrardetalle(){
        console.log (`marca ${this.marca}, modelo ${this.modelo}, estado: ${this.estado}`);
    }
    cambiarestado(){
        this.estado = nuevoestado;
    }
}
class serviciomecanico{
    reparar(carro){
        console.log(`reparando el ${carro.marca} ${carro.modelo}`);
        carro.cambiarestado('reparar');
        console.log(`reparando el ${carro.marca} ${carro.modelo} ha sido revisado y esta ${carro.estado}`);
    }
}

const micarro =new Carro ('toyota', 'hilux');

const taller = new serviciomecanico('');

taller.reparar (micarro);


micarro.mostrardetalle(); // muestra marca: toyota, modelo: hilux, estado: reparado

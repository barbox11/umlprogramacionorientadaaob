class carro{
    #color;
    #marca;
    #modelo;
    #numpuertas;

    constructor(color, marca, modelo, numpuertas){
        this.#color = color;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#numpuertas = numpuertas;
    }
    obtenercolor(){
        return this.#color;
    }
    obtenermarca(){
        return this.#marca;
    }
    obtenermodelo(){
        return this.#modelo;
    }
    obtenernumpuerta(){
        this.#numpuertas;
    }
    cambiarcolor(color){
        this.#color=color;
    }
    cambiarmarca(marca){
        this.#marca=marca;
    }
    cambiarmodelo(modelo){
        this.#modelo=modelo;
    }
    cambiarnumpuertas(numpuertas){
        this.#numpuertas=numpuertas;
    }
    mostrardetalles(){
        console.log(`carro ${this.#marca } ${this.#modelo}, color ${this.#color}, numero de puertas: ${this.#numpuertas}`);
    }
}

const micarro = new carro('verde','audi', 'zx', 5);

micarro.mostrardetalles();
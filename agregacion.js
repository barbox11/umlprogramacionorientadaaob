class Rueda{
    constructor(tipo, diametro){
        this.tipo = tipo;
        this.diametro = diametro;
    }
    mostrardetalles(){
        console.log(`rueda tipo ${this.tipo}, diametro ${this.diametro}`);
    }
}

class carro{
    constructor(color, marca, modelo, numpuertas, ruedas){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.numpuertas = numpuertas;
        //se agrego la calse ruedas 
        this.ruedas = ruedas;
    }
    mostrardetalles(){
        console.log(`carro ${this.marca} ${this.modelo}, color ${this.color}, numero de puertas ${this.numpuertas}`);
        this.ruedas.forEach((rueda, index)=> {
            console.log(`rueda ${index +1}: ${rueda.tipo}, diametro ${rueda.diametro} pulgadas`);
        });
    }
}

//intaciar o llamr a las ruedas

const ruedadelanteraizquierda = new Rueda('verano', 18);
const ruedadelanteraderecha = new Rueda ('verano', 18);
const ruedatraseraizquierda = new Rueda ('inierno', 17);
const ruedatraseraderecha = new Rueda ('inierno', 17);

// creamos la instancia de carro con la agregacion de las ruedas 

const mycarro = new carro('negro', 'audi', 'A4', 5, [ruedadelanteraizquierda, ruedadelanteraderecha , ruedatraseraizquierda, ruedatraseraderecha]);

mycarro.mostrardetalles();
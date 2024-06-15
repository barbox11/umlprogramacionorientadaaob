class figurageometrica{
    constructor(color){
        this.color = color;
    }

    calculararea(){
        throw new error("metodo adstracto 'caculararea'debe ser implementado");
    }
}

class rectangulo  extends figurageometrica{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    calculararea(){
        return this.base * this.altura;
    }
}

class circulo extends figurageometrica{
    constructor (color, radio){
        super(color);
        this.radio=radio;
    }
    calculararea(){
        return Math.PI * this.radio *this.radio;
    }
}
const rectangulo = new rectangulo('amarrillo',5,10);
const circulo = new circulo('morado', 7);

console.log (`area del rectangulo ${rectangulo.color}: ${rectangulo.calculararea()}`);
console.log (`area del circulo ${circulo.color}: ${circulo.calculararea()}`);
class Area {
    base = null;
    altura = null;
    constructor(B, A){
        this.base = B;
        this.altura = A;
    }
    
    resultado = function(){
        return "El area del rectangulo es: " + this.res
    }
    resultado2 = function(){
        return "El area del triangulo es de : " + this.res2
    }
    

}
var res = this.base * this.altura;
var res2 = this.base * this.altura / 2;

var rectangulo = new Area( 25, 25);
var triangulo = new Area( 15, 10);

function resultados ( ) {
    alert (Area.resultados());
    
}

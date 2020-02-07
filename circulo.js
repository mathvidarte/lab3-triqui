class Circulo extends Figura{
    constructor(px,py){
        super(px,py);
    }
    pintar(){
        fill(355,0,0);
        ellipse(px,py,120,120);
    }
}
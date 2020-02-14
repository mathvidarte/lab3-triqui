class circulo extends Figura{
    constructor(px,py){
        super(px,py);
    }
    pintar(){
        fill(55,230,123);
        ellipseMode(CORNER);
        ellipse(this.px,this.py,200,200);
    }
}
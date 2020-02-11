class circulo extends Figura{
    constructor(px,py){
        super(px,py);
    }
    pintar(){
        fill(355,0,0);
        ellipse(this.px,this.py,120,120);
    }
}
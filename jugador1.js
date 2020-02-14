class Jugador1 extends Espacio{
    constructor(px,py){
        super(px,py);
      
    }

    pintar(){
        image(eo,this.px,this.py,200,200);
    }
}
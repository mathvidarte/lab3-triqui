class Nada extends Espacio {
    constructor(px, py){
        super(px,py);
    }

        pintar(){
            noFill();
            rect(this.px, this.py, 200,200);
    }

}
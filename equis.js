class equis extends Figura {
    constructor (px, py) {
        super (px, py);
    }
    pintar () {
        fill(120, 320, 200);
        rectMode(CORNER);
        rect(this.px, this.py, 200, 200);
    }
}
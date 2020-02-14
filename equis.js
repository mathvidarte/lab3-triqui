class equis extends Figura {
    constructor (px, py) {
        super (px, py);
    }
    pintar () {
        fill(120, 0, 200);
        rectMode(CENTER);
        rect(this.px, this.py, 200, 200);
    }
}
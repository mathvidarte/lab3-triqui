class equis extends figura {
    constructor (px, py) {
        super (px, py);

    }

    pintar () {
        fill (120, 0, 200);
        rect (this.px, this.py, 120, 120);
    }
}
let mapa = [
    [1,1,1],
    [1,1,1],
    [1,1,1],
]

let fuguras = [];
let turno;

function setup () {
    createCanvas (500,500);
    turno = 1;

}

function draw () {
    background(132,195,190);
    line(166.6, 0, 166.5, 500);
    line(333.4, 0, 333.4, 500);
    line(0, 166.6,500,  166.5);
    line(0, 333.4, 500, 333.4);

    for (let i = 0; i < figuras.length; i++) {
            figuras[i].pintar();
    }

    
}

function mousePressed() {
    if (turno == 1) {
        figuras.push(new circulo(mouseX, mouseY));
        turno++;
    }

    if (turno == 2) {
        figuras.push(new equis (mouseX, mouseY));
    }
    

}
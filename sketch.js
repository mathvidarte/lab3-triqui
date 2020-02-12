let mapa = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

let eo;
let ayuwoki;


let figuras = [];
let turno;
let valor1 = 0;
let valor2 = 0;


function preload(){
    eo = loadImage("images/eo.png");
    ayuwoki = loadImage("images/hehe.jpg");
}    

function setup () {
    createCanvas (600,600);
    turno = 1;

}

function draw () {
    background(132,195,190);

    //lineas triqui
    //line(166.6, 0, 166.5, 500);
    //line(333.4, 0, 333.4, 500);
    //line(0, 166.6,500,  166.5);
    //line(0, 333.4, 500, 333.4);

    for (let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){

            valor1 = mapa[i];
            valor2 = valor1[j];
    
            if(valor2 ==0){
                //vacio
            }
            if(valor2 ==1){
                //pinte sol
                figuras.push(new circulo(i, j));
            }
            if(valor2 ==2){
                //pinte luna
                figuras.push(new equis (i, j));
            }
        }

    }

    for (let i = 0; i < figuras.length; i++) {
            figuras[i].pintar();
    }
}

function mousePressed() {

    if(mapa[0][0]){
        if(turno == 1){
            valor2 = 1;
            turno = 2;
        }else{
            valor2 = 2;
            turno = 1;
        }
    }

    switch(turno){
        case 1:
            valor2 = 1;
            turno = 2;
            break;
        case 2:
            valor2 = 2;
            turno = 1;
            break;

    }
    
}
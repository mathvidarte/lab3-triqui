let mapa = new Array(3);
let turno = 1;
let cambiarTurno = false;

function setup () {
    createCanvas (600,600);

    for (let i = 0; i < 3; i++){
        mapa[i] = new Array(3);
        for(let j = 0; j < 3; j++){
            mapa[i][j] = new Espacio (i*200, j*200, 0);
        }
    }
}

function draw () {
    background(132,195,190);

    //lineas triqui
    line(200,0,200,600);
    line(400,0,400,600);
    line(0,200,600,200);
    line(0,400,600,400);

    for (let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            mapa[i][j].pintar();
        }
    }  
}

function mousePressed() {

    for (let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(mouseX > i*200 && mouseX < i*200 + 200 && mouseY > j*200 && mouseY < j*200+200){
                if(mapa[i][j].num == 0){

                    if (cambiarTurno == false){
                        turno = 1;
                        cambiarTurno = true;
                    }else{
                        turno = 2;
                        cambiarTurno = false;
                    }

                    mapa[i][j].num = turno;
                    mapa[i][j].px = i*200;
                    mapa[i][j].py = j*200;

                    console.log(mapa[i][j])
                    }    
                }
            }
        }
    }

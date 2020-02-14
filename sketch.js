let mapa = new Array(3);
let turno = 1;
let cambiarTurno = false;
let gano1 = false;
let gano2 = false;
let empate = false;
let fila = 3;
let col = 3;


function setup () {
    createCanvas (600,600);

    for (let i = 0; i < fila; i++){
        mapa[i] = new Array(3);
        for(let j = 0; j < col; j++){
            mapa[i][j] = new Espacio (i*200, j*200, 0);
        }
    }
}

function draw () {

    validarGanar();

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
    
    if (gano1 == true) {
        //textMode(CENTER);
        fill (255);
        textSize (40);
        text("Ganó Fredy Eeeeeoooo!!", 80, 300);
    }else if (gano2 == true) {
        //textMode(CENTER);
        fill (255);
        textSize (40);
        text("Ganó el Ayuwoki heheeee!!", 100, 300);
    }
        
     

    for (let i = 0; i < fila; i++) {
            if (mapa[i][0].num != 0 && mapa[i][1].num != 0 && mapa[i][2].num != 0 &&
                mapa[0][i].num != 0 && mapa[1][i].num != 0 && mapa[2][i].num != 0 &&
                mapa[0][0].num != 0 && mapa[1][1].num != 0 && mapa[2][2].num != 0 &&
            mapa[0][2].num != 0 && mapa[1][1].num != 0 && mapa[2][0].num != 0) {
                    empate = true;
                }
        
    
}
if (empate == true) {
         fill (255);
            text("Empate", 300, 300);
    
    }
    

    console.log(empate);
}

function validarGanar () {

   

    
   for (let i = 0; i < fila; i++) {
        if (mapa[i][0].num == 1 && mapa[i][1].num == 1 && mapa[i][2].num == 1 ||
            mapa[0][i].num == 1 && mapa[1][i].num == 1 && mapa[2][i].num == 1 ||
            mapa[0][0].num == 1 && mapa[1][1].num == 1 && mapa[2][2].num == 1 ||
            mapa[0][2].num == 1 && mapa[1][1].num == 1 && mapa[2][0].num == 1) {
                gano1 = true;
                return;
            }
    }

    for (let i = 0; i < fila; i++) {
        if (mapa[i][0].num == 2 && mapa[i][1].num == 2 && mapa[i][2].num == 2 ||
            mapa[0][i].num == 2 && mapa[1][i].num == 2 && mapa[2][i].num == 2 ||
            mapa[0][0].num == 2 && mapa[1][1].num == 2 && mapa[2][2].num == 2 ||
            mapa[0][2].num == 2 && mapa[1][1].num == 2 && mapa[2][0].num == 2){
                gano2 = true;
                return;
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

                   // console.log(mapa[i][j])
                    }    
                }
            }
        }
    }
   
    
       
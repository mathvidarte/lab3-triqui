let mapa = new Array(3);
let turno = 1;
let cambiarTurno = false;
let pantalla;

function setup () {
    createCanvas (600,600);

    for (let i = 0; i < 3; i++){
        mapa[i] = new Array(3);
        for(let j = 0; j < 3; j++){
            mapa[i][j] = new Espacio (i*200, j*200, 0);
        }
    }

    pantalla = 0;
}

function draw () {
    switch(pantalla){
        case 0:
            background(190,175,355);
            fill(355);
            textSize(75);
            text("TRIQUI", 150,270);
            stroke(355);
            rect(220, 320,130, 50);
            fill(190,175,355);
            textSize(27);
            text("JUGAR", 237, 355);

            if(mouseX > 220 && mouseX < 350 && mouseY > 320 && mouseY < 370){
                fill(132,195,190);
                rect(220, 320,130, 50);
                fill(355);
                textSize(27);
                text("JUGAR", 237, 355);
            }

            break;
        case 1:
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
            break;
        }
    }

function mousePressed() {
    switch(pantalla){
        case 0:
            if(mouseX > 220 && mouseX < 350 && mouseY > 320 && mouseY < 370){
                pantalla++;
            }
            break;
        case 1:
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
            break;
            }
        }

let filas = 3;
let col = 3;

/*let mapa = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]*/

let mapa = [[]];

let eo;
let ayuwoki;

let figuras = [];

let turno = 3;
let cambiarTurno = false;


function preload(){
    eo = loadImage("images/eo.png");
    ayuwoki = loadImage("images/hehe.jpg");
}    

function setup () {
    createCanvas (600,600);

    mapa = [filas[col]];

    for (let i = 0; i < filas; i++){
        for(let j = 0; j < col; j++){
            mapa[i[j]] = 0;
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

    for (let i = 0; i < figuras.length; i++) {
        figuras[i].pintar();
    }

    /*for (let i = 0; i < filas; i++){
        for(let j = 0; j < col; j++){
            switch(mapa[i[j]]){
                case 0:
                    //nada
                    break;
                case 1:
                    //circulo
                    figuras.push(new circulo(i*200, j*200));
                    break;
                case 2:
                    //equis
                    figuras.push(new equis (i*200, j*200));
                    break;
            }
        }
    }*/

    if (mapa[0[0]] == 0) {
        switch (mapa[0[0]]) {
            case 0: 

            break;
            case 1 :
                    figuras.push(new circulo(0*200, 0*200));
                    break;
                    case 2: 
                    figuras.push(new equis (0*200, 0*200));
                    break;
            }
        }
    
       
}

function mousePressed() {

   /* for (let i = 0; i < filas; i++){
        for(let j = 0; j < col; j++){
            if(mouseX > i*200 && mouseX < i*200 + 200 && mouseY > j*200 && mouseY < j*200+200){
                if(mapa[i[j]] == 0){
                    //mapa[i[j]] = turno;

                    if(!cambiarTurno){
                        mapa[i[j]] = 2;
                        cambiarTurno = true;
                        return;
                    }
                    if(cambiarTurno){
                        mapa[i[j]] = 1;
                        cambiarTurno = false;
               return;
                    }
                }
            }
        }
    }*/
   
    
        if (mouseX > 0*200 && mouseX < 0*200 + 200 && mouseY > 0*200 && mouseY < 0*200+200 && mapa[0[0]] == 0) {
            
                //mapa[0[0]] = turno;

                
                

                
                if(cambiarTurno == true){
                    mapa[0[0]] = 2;
                    cambiarTurno = false;
                    return;
                }
                if(cambiarTurno == false){
                    mapa[0[0]] = 1;
                    cambiarTurno =true;
           return;

        }
    }

    console.log(cambiarTurno);
}
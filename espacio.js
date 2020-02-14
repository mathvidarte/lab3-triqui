class Espacio{
    constructor(px, py, num){
        this.px = px;
        this.py = py;
        this.num = num;

    }

    pintar(){
        
        if(this.num == 0){
            //vacio
        } 
       else if(this.num == 1){
            //fill(355,0,0);
           // rect(this.px, this.py,200,200);
            image(eo,this.px,this.py,200,200);
        }
        else if(this.num == 2){
            //fill(0,132,390);
            //rect(this.px, this.py, 200, 200);
            image(hehe,this.px,this.py,200,200);
        }
    }


    

    
}



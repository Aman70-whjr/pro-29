class rock {
    constructor(x,y){
    
      this.image = loadImage("rock.png");
    }
  
    display() {
        image(this.image , 200, 20)
           
    }
  }
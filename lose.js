class LoseHud {

    constructor() {
    //   this.input = createInput("Name");
       this.button = createButton('Restart');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
    //   this.input.hide();
      this.title.hide();
    }
    show(){
        this.greeting.show();
        this.button.show();
      //   this.input.hide();
        this.title.show();  
    }
    display(){
        this.show()
        push()
        translate((camera.position.x - width/2),(camera.position.y - height/2))
        fill(240,240,240,150)
      rect(width/2,height/2,width/2,height/2)
      this.title.html("GameOver");
      this.title.position(width/2,height*0.4);
  
    //   this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(width/2,height*0.56);
  2
      this.button.mousePressed(()=>{
        Score=0;
        gameState = 0
        this.hide()
        Matter.Body.setPosition(player.body, {x:width/2,y:height/2})
          });
      pop();
    }
}
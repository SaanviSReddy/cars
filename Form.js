class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-60, 50);
    
    
    this.input.position(displayWidth/2-25, displayHeight/2-50);
    this.button.position(displayWidth/2, displayHeight/2);

    this.button.mousePressed(()=>{
      this.button.hide();
      this.input.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index=playerCount;
      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-50, displayHeight/2+20)
    });

  }


}

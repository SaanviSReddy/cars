class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var firstPlayerCount=await database.ref('playerCount').once("value");
      if(firstPlayerCount.exists()){
        playerCount=firstPlayerCount.val()
        player.getCount();
      }
     
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
    cars=[car1,car2,car3,car4]
  }
  play(){
    form.hide();
    textSize(30);
    text("Game Starting...",120,100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      var index=0;
      var x=0,y;
      //var yPosition=130;
      for(var plr in allPlayers){
        index=index+1;
       /* if(plr==="player"+player.index){
          fill("red");
        }
        else{
          fill(0);
        }*/
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;
       //textSize(15);
       // text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,yPosition);
       //yPosition +=20;
        if(index===player.index){
          cars[index-1].shapeColor=red;
        }
        }
    }
    if(keyDown(UP_ARROW) && player.index !==null){
      player.distance+=50;
      player.update();
    }
  }
}

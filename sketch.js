var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var car1,car2,car3,car4;  
var cars;



function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  console.log(displayWidth);
  console.log(displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount===4){
    game.update(1);
  
  }
  if(gameState===1){
    clear()
    game.play();
  }

  drawSprites();
}

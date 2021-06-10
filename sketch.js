var gameState=0;
var PlayerCount=0;
var rank;
var database;
var player,form,game;

function setup(){
  createCanvas(1200,800)
  database=firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
background("green")
if(playerCount===2){
  game.update(1)
}
if(gameState===1){
  clear()
  game.play()
}
}
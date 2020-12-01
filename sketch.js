
var monkey , monkey_running,ground,monkey_stop,sun;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var PLAY = 0;
var END = 1;

var score = 0;
var survivalTime = 0;
var gameOver;

var gameState = PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkey_stop = loadAnimation("sprite_0.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  ground = createSprite(300,580,600,40);
  ground.shapeColor = "green";
  
  
  monkey = createSprite(50,500,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.addAnimation("stop", monkey_stop);
  monkey.scale = 0.2;
  
  
  
  obstacleGroup = new Group();
  foodGroup = new Group();
  
  
  

  
}


function draw() {
  background('lightblue');
  fill("yellow");
  arc(500, 70, 100, 100 , 0, 360);
  
  
  monkey.setCollider('circle',0,0,300)
  monkey.collide(ground);
  
  stroke("black");
  textSize(30);
  fill("black");
  text("SurvivalTime : " + survivalTime,10,35);
  
  
  if(gameState === PLAY){
     if(keyDown('space')&& monkey.y > 350){
      monkey.velocityY = -10
     }
     monkey.velocityY = monkey.velocityY + 0.5;
    survivalTime = Math.round(frameCount/50);
    
    
    
    
  }
  
  
  
  if(gameState === END){
    monkey.changeImage("stop",monkey_stop);
    monkey.velocityY = 0;
    obstacleGroup.destroyEach(0);
    foodGroup.destroyEach(0);
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    stroke("black");
    textSize(40);
    fill("black");
    text("GameOver",200,300);
    
  }
  
  if(monkey.isTouching(obstacleGroup)){
    gameState = END;
  }

   
  drawSprites()
  obstacles()
  createBananas()
  
}
function createBananas(){
  if(frameCount % 90 === 0){
    banana = createSprite(600,Math.round(random(300,400)),10,10);
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.1;
    foodGroup.add(banana);
    
  }
}

function obstacles(){
  if(frameCount % 150 === 0){
    obstacle = createSprite(600,510,10,10);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -5
    obstacle.scale = 0.3;
    obstacleGroup.add(obstacle);
    
    
  }
}







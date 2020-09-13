var backImage,back,player,player_running,ground,ground_image;
var foodGroup,bananaImage,obstaclesGroup,obstacle_image;
var GameOver,score;

function preload (){
  backImage=loadImage("jungle2.jpg");
  bananaImage=loadImage("Banana.png");
  obstacle_image=loadImage("stone.png");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}

function setup() { 
  createCanvas(800, 400);
  back=createSprite(0,0,800,400);
  back.addImage(back);
  back.scale=1.5;
  back.x=back.width/2;
  back.velocityX=-4;
  
  player=createSprite(100,340,20,50);
  player.addAnimation("running",player_running);
  player.scale=0.1;
  
  ground=createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  FoodGroup=new Group();
  obstaclesGroup=new Group();
  
  score=0;
  
}

function draw() {
  background(220);
  
  if(back.x<100){
    back.x=back.width/2;
  }
  
  if(keyDown("space")){
    player.velocityY=- 12;
  }
  if(FoodGroup.isTouching(player)){
    FoodGroup.destroyEach();
  }
  player.velocityY=player.velocityY+0.8;
  player.collide(ground);
  spawnFood();
  spawnObstacles();
  drawSprites();
}

function spawnFood() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
     //assign lifetime to the variable
    banana.lifetime = 300;
    player.depth = banana.depth + 1;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacle_img);
    
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}


  

  
  
  
  
  
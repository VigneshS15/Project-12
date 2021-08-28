var garden,rabbit;
var gardenImg,rabbitImg;

var apple,leaf
var appleImg,leafImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

applegroup = new Group()
leafgroup = new Group()  

}

function draw() {
  background("white");

  rabbit.x = mouseX
  edges = createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 === 0){
    if(select_sprites === 1){
      createApples()
    }
    else{
      createLeaves()
    }
  }

  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,150),180,10,10)
  apple.addImage(appleImg)
  apple.velocityY = 3
  apple.scale = 0.1
  apple.lifetime = 100
  applegroup.add(apple)
if(applegroup.isTouching(rabbit)){
  applegroup.setLifetimeEach(-1)
}
}

function createLeaves(){
  leaf = createSprite(random(50,150),180,10,10)
  leaf.addImage(leafImg)
  leaf.velocityY = 3
  leaf.scale = 0.1
  leaf.lifetime = 100
}








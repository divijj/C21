var bullet,wall,wall2,thickness;
var speed,weight,damage;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)
  bullet=createSprite(50,200,50,25);
  wall=createSprite(1100,200,thickness,height/2);
  wall2=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall.visible=false;
}

function draw() {
  background(0);  
  drawSprites();
  if(wall.x-bullet.x<(bullet.width+wall.width+1)/2){
bullet.velocityX=0;
bullet.x=1450;
damage=0.5*weight*speed*speed/thickness*thickness*thickness;
if(damage<100){
  bullet.shapeColor="green";
}else if(damage>100&&damage<180){
  bullet.shapeColor="yellow";
}else if(damage>180){
  bullet.shapeColor="red";
}

    }
}
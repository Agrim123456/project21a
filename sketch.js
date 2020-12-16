var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(150, 200, 50, 10);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="blue"
speed=random(55,90);
thickness=random(223,321)
weight=random(30,52);
bullet.velocityX=speed;

}

function draw() {
  background(255,255,255);
  
if(hascollided(bullet,wall)){
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if (damage>10)
{
wall.shapeColor=color(255,0,0);
}
if (damage<10){

wall.shapeColor=color(0,255,0)

}


}
  
  
  
  
  
  drawSprites();
}
function hascollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false
}
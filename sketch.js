var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);

  speed=random(223,321);
  weight=random(52,32);

  bullet=createSprite(50,200,40,10,weight);
  bullet.velocityX= speed;

  wall=createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255); 
 if(hasCollided(wall,bullet)){
 bullet.velocityX=0
 var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
 if (damage>10){
 wall.shapeColor=color(255,0,0);
 }
 if (damage<10){
 wall.shapeColor=color(0,255,0);
 }
 }
  bullet.collide(wall);
  hasCollided(wall,bullet);
  drawSprites();
}
function hasCollided(wall,bullet){
bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge){
return true
}
return false;
}





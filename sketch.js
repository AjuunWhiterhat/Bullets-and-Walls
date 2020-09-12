
var bullet,wall;
var speed,weight;
var thickness,damage;
var bulletRightEdge,wallLeftEdge; 

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 40, 10,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
 
  wall=createSprite(1200,40,thickness,height+2);
  wall.shapeColor = rgb(80,80,80);

  thickness=random(22,83);

  damage = 0;


}

function draw() {
  background(210);  
  
  Damage();

  console.log(damage);
  
  drawSprites();

  

}

function Damage()
{
  if(HasCollided(bullet, wall)){
    damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    bullet.velocityX = 0;
    if(damage<=10){
      bullet.shapeColor = "green";
    }

    else if(damage>10){
      bullet.shapeColor = "red";
    }
  }
    
  
}

function HasCollided(bullet,wall)
{
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false
}




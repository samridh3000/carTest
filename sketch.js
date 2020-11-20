var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  car=createSprite(20,200,30,30)
  wall=createSprite(1500,200,40,height/2)
  wall.shapeColor= color(80,80,80)
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed;
  
}

function draw() {
  background("black");  
  if(car.x>wall.x){
   setVelocityX=0
  }
  
  
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocity=0
    var deformation=0.5*weight*speed*speed/22500
    
    if(deformation>180){
    car.shapeColor=color(225,0,0)
  
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0)
    }

    if(deformation<100){
      car.shapeColor=color(0,250,0)
      
    }

    
  }
  drawSprites();
}
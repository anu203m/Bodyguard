var bgImg;
var shooter, shooterImg1, shooterImg2, shooterImg3;
var zombie, zombieImg1, zombieImg2;
var bullet, bulletImg;
var bg;
var bulletGp, ZombieGp;
var score = 0;

function preload(){
  bgImg = loadImage("assets/zombie-bg.jpg");
  shooterImg1 = loadImage("assets/GunStand.png") ;
  shooterImg2 = loadImage("assets/GunWalk.png") ;
  shooterImg3 = loadImage("assets/GunShot.png") ;
  zombieImg1 = loadImage("assets/Zombie1.png");
  zombieImg2 = loadImage("assets/zombie.png");
  bulletImg = loadImage("assets/Bullet.png");
}

function setup()
 {
  createCanvas(1366, 625);
  console.log(windowWidth);
  console.log(windowHeight);

  bg = createSprite(1366/2, 625/2, 1366, 625);
  bg.visible = false;

  shooter = createSprite(390, 530);
  shooter.addAnimation("shooting", shooterImg1);  

  bulletGp = new Group();
  zombieGp = new Group();
}

function draw() 
{
  background(bgImg);
  zombies();
//1013, 781;
textSize(30);
fill("white")
stroke(39, 242, 42);
strokeWeight(3)
text("x: "+ mouseX + " y: "+ mouseY, mouseX, mouseY);
text("Score: " + score, 80, 30);
shooter.y = mouseY;
if(shooter.y < 390){
  shooter.y = 390;
}
//if(shooter.y === shooter.y + 1 || shooter.y === shooter.y - 1){
 // shooter.changeAnimation("shooting", shooterImg);
 if(mousePressedOver(bg)){
   console.log("hello");
   bullet = createSprite(shooter.x+60, shooter.y);
   bullet.addImage(bulletImg);
   bullet.velocityX = 6;
  bullet.scale = 0.1
  bullet.debug = true;
  bullet.setCollider("rectangle", 0, 0, 60, 30)
  bulletGp.add(bullet);
 }
 if (bulletGp.collide(zombieGp)){
   bulletGp[0].destroy();
   zombieGp[0].destroy();
   score = score + 10;
 }

  drawSprites();
}
function zombies(){
  if(frameCount%90 === 0){
    console.log("hi");
    zombie  = createSprite(1160, random(400,620), 50, 50);
    zombie.velocityX = -3;
    var num = round(random(1,6));
    switch(num){
      case 1: zombie.addImage(zombieImg1)
      zombie.scale = 0.8
      break;

      case 2: zombie.addImage(zombieImg2)
      zombie.scale = 0.17
      break;

      case 3: zombie.addImage(zombieImg1)
      zombie.scale = 0.8
      break;

      case 4: zombie.addImage(zombieImg1)
      zombie.scale = 0.8
      break;

      case 5: zombie.addImage(zombieImg1)
      zombie.scale = 0.8
      break;

      case 6: zombie.addImage(zombieImg1)
      zombie.scale = 0.8
      break;
    }
    zombie.lifetime = 396;
    shooter.depth = zombie.depth + 1;
    zombie.debug = true;
    zombie.setCollider("rectangle", 0, 0, 100, 200)
    zombieGp.add(zombie);
  }
}

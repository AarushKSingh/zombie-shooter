var bg,bgImg;
var player, shooterImg, shooter_shooting;
var cityzz,flyingzz



function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  cityz = loadImage("city zombie.png")
  flyingz = loadImage("flying zombie.png")
  flyingz2 = loadImage("flying zombie 2.png")
  kidz = loadImage("kid zombie.png")
  ladyz = loadImage("lady zombie.png")
  normalz = loadImage("normal zombie.png")
  cakez = loadImage("zombie cake.png")
  dogz = loadImage("zombie dog.png")
  risingz = loadImage("zombie rising.png")
  risingz2 = loadImage("zombie rising 2.png")
  swordz = loadImage("zombie sword.png")
  girlz = loadImage("zombie girl.png")
  bullet = loadImage("bullet.png")


}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)




bg.scale = 1.1

risingzz = createSprite(1300,600,0,0)
risingzz.scale = 0.6
risingzz2 = createSprite(1250,500,0,0)
risingzz2.scale = 0.6



risingzz.addImage(risingz)
risingzz2.addImage(risingz2)
jj = createButton("shhot")
jj.position(100,100)






//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.5
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(jj.mousePressed()){
  player.addImage(shooter_shooting)
  bulletk = createSprite(player.x,player.y)
  bulletk.scale = 0.25
  bulletk.velocityX = 10
  bulletk.addImage(bullet)
}

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  bulletk = createSprite(player.x,player.y)
  bulletk.scale = 0.25
  bulletk.velocityX = 10
  bulletk.addImage(bullet)
  
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}






randomm()
spawn()
dspawn()
drawSprites();

}
function randomm(){
  if (frameCount% (Math.round(random(100,450))) === 0){
    cityzz = createSprite(1200,(Math.round(random(550,600))),0,0)
    cityzz.scale = 0.6
    cityzz.velocityX = -2
flyingzz = createSprite(1000,(Math.round(random(50,120))),0,0)
flyingzz.scale = 0.6
flyingzz.velocityX = -2
flyingzz2 = createSprite(1040,(Math.round(random(50,50))),0,0)
flyingzz2.scale = 0.6
flyingzz2.velocityX = -2
cityzz.addImage(cityz)
flyingzz.addImage(flyingz)
flyingzz2.addImage(flyingz2)
   }
}





function spawn(){
  if (frameCount% (Math.round(random(100,450))) === 0){
    kidzz = createSprite(1090,(Math.round(random(400,700))),0,0)
    kidzz.scale = 0.6
    kidzz.velocityX = -3
ladyzz = createSprite(900,(Math.round(random(500,600))),0,0)
ladyzz.scale = 0.6
ladyzz.velocityX = -1
normalzz = createSprite(1000,(Math.round(random(600,700))),0,0)
normalzz.scale = 0.6
normalzz.velocityX = -2
cakezz = createSprite(750,(Math.round(random(650,800))),0,0)
cakezz.scale = 0.6
cakezz.velocityX = -1
kidzz.addImage(kidz)
ladyzz.addImage(ladyz)
normalzz.addImage(normalz)
cakezz.addImage(cakez)
   }
}




function dspawn(){
  if (frameCount% (Math.round(random(100,450))) === 0){
    dogzz = createSprite(500,(Math.round(random(500,700))),0,0)
    dogzz.scale = 0.6
    dogzz.velocityX = -3
swordzz = createSprite(500,(Math.round(random(550,600))),0,0)
swordzz.scale = 0.6
swordzz.velocityX = -1
girlzz = createSprite(500,(Math.round(random(500,650))),0,0)
girlzz.scale = 0.6
girlzz.velocityX = -1




dogzz.addImage(dogz)

swordzz.addImage(swordz)
girlzz.addImage(girlz)
   }
}
var line1

var line2

var line3

var line4

var line5

var line6

var line7

var line8

var btn

var player

var line9

var line10

var line11

var line12

var line13

var line14

var line15

var line16

var line17

var line18

var line19

var line20

var gameState = "stop";

function setup () {

  createCanvas (900,400)  
    
  line1 = createSprite(50, 220, 1, 150)
  line2 = createSprite(240, 145, 380, 1)
  line3 = createSprite(430, 220, 1, 150)
  line4 = createSprite(240, 295, 380, 1)
  line5 = createSprite(70, 260, 40, 1)
  line6 = createSprite(100, 180, 30, 1)
  line7 = createSprite(85, 195, 1, 30)
  line8 = createSprite(135, 210, 100, 1)
  line9 = createSprite(145, 177.5, 1, 65)
  line10 = createSprite(115, 225, 1, 30)
  line11 = createSprite(185, 230, 1, 40)
  line12 = createSprite(165, 250, 40, 1)
  line13 = createSprite(145, 262.5, 1, 25)
  line14 = createSprite(115, 275, 60, 1)
  line15 = createSprite(185, 282.5, 1, 25)
  line16 = createSprite(200, 180, 30, 1)
  line17 = createSprite(215, 195, 1, 30)
  line18 = createSprite(230, 210, 30, 1)







  player = createSprite (60, 155, 7, 7)



  


}

function draw() {
  background("white")

drawSprites ()


  if (gameState === "stop") {

    textSize(20)
    text ("WORLD'S HARDEST GAME", 100, 70)
    textSize(10)
    text ("PRESS 'PLAY' TO CONTINUE", 160, 90)
    btn = createButton("PLAY")
    btn.position(200, 110)
    btn.mousePressed(btn1) 

  
  }
else if(gameState==="play"){
  if (keyDown("left")) {
      player.x = player.x-3 
    }

  if (keyDown("right")) {
      player.x = player.x+3
  }

  if (keyDown("up")) {
      player.y = player.y-3
  }

  if (keyDown("down")) {
      player.y = player.y+3
  }

  removeElements(btn)
}


}

function btn1 () {
    
  gameState = "play"
 
}
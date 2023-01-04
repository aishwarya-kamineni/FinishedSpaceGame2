var gState
var alienCount1 = 0
var alienCount2 = 0
var alienCount3 = 0
var alienCount4 = 0
var alienCount5 = 0
var alienCount6 = 0
var alienCount7 = 0

var lasers , alien , alien2 , alien3 , alien4 , alien5 , alien6
var a3deathC = 3
var a4deathC = 3
var a5deathC = 3
var a6deathC = 3
var a7deathC = 3




function preload() {
    bgImg = loadImage("Images/bg.jpg")
    spaceCraftImg = loadImage("Images/spacecraft.png")

    alienImg = loadImage("Images/alien.png")
    alien2Img = loadImage("Images/alien2.png")
    alien3Img = loadImage("Images/alien3.png")
    alien4Img = loadImage("Images/alien4.png")
    alien5Img = loadImage("Images/alien5.png")
    alien6Img = loadImage("Images/alien6.png")
    alien7Img = loadImage("Images/alien7.png")


    p1Img = loadImage("Images/p1.png")
    p2Img = loadImage("Images/p2.png")
    p3Img = loadImage("Images/p3.png")
    p4Img = loadImage("Images/p4.png")
    p5Img = loadImage("Images/p5.png")
    p6Img = loadImage("Images/p6.png")
    p7Img = loadImage("Images/p7.png")

    pViewImg = loadImage("Images/viewfromplanet.jpg")

    laserImg = loadImage("Images/lazer.png")

}

function setup() {
    createCanvas(windowWidth, windowHeight)

    bg = createSprite(width / 2, height / 2, width, height)
    bg.addImage(bgImg)
    bg.scale = 1.5

    pView = createSprite(width / 2, height / 2, width, height)
    pView.addImage(pViewImg)
    pView.scale = 4
    pView.visible = false

    alien = createSprite(width / 2, height - 100)
    alien.addImage(alienImg)
    alien.scale = 0.4
    alien.visible = false

    alien2 = createSprite(width/2, height - 100)
    alien2.addImage(alien2Img)
    alien2.scale = 0.4
    alien2.visible = false

    alien3 = createSprite(width/2, height - 100)
    alien3.addImage(alien3Img)
    alien3.scale = 0.4
    alien3.visible = false

    alien4 = createSprite(width/2, height - 100)
    alien4.addImage(alien4Img)
    alien4.scale = 0.4
    alien4.visible = false

    alien5 = createSprite(width/2, height - 100)
    alien5.addImage(alien5Img)
    alien5.scale = 0.4
    alien5.visible = false

    alien6 = createSprite(width/2, height - 100)
    alien6.addImage(alien6Img)
    alien6.scale = 0.4
    alien6.visible = false

    alien7 = createSprite(width/2, height - 100)
    alien7.addImage(alien7Img)
    alien7.scale = 0.4
    alien7.visible = false

    p1 = createSprite(100, height - 100, width, height)
    p1.addImage(p1Img)
    p1.scale = 0.3

    p2 = createSprite(300, height - 200, width, height)
    p2.addImage(p2Img)
    p2.scale = 0.3

    p3 = createSprite(500, height - 300, width, height)
    p3.addImage(p3Img)
    p3.scale = 0.3

    p4 = createSprite(700, height - 400, width, height)
    p4.addImage(p4Img)
    p4.scale = 0.3

    p5 = createSprite(1000, height - 500, width, height)
    p5.addImage(p5Img)
    p5.scale = 0.3

    p6 = createSprite(width - 300, height - 300, width, height)
    p6.addImage(p6Img)
    p6.scale = 0.3

    p7 = createSprite(width - 100, height - 180, width, height)
    p7.addImage(p7Img)
    p7.scale = 0.3

    spaceCraft = createSprite(width / 2, height - 100)
    spaceCraft.addImage(spaceCraftImg)
    spaceCraft.scale = 0.4

    invi = createSprite(width/2 , height , width , 2)
    invi.visible = false

    lasers = createGroup()

    aliens1 = createGroup()

    aliens2 = createGroup()

    aliens3 = createGroup()

    aliens4 = createGroup()

    aliens5 = createGroup()

    aliens6 = createGroup()

    aliens7 = createGroup()
}

function draw() {

    background("black")

    drawSprites()

    if (keyDown(RIGHT_ARROW)) {
        spaceCraft.x += 15
    }

    if (keyDown(LEFT_ARROW)) {
        spaceCraft.x -= 15
    }

    if (keyDown(UP_ARROW)) {
        spaceCraft.y -= 15
    }

    if (keyDown(DOWN_ARROW)) {
        spaceCraft.y += 15
    }


    if (spaceCraft.isTouching(p1)) {
        gState = "p1" }

    // ------------------------------------ Planet 1 --------------------------------------------------
    if (gState == "p1") {
        pView.visible = true
        p1.visible = false
        p2.visible = false
        p3.visible = false
        p4.visible = false
        p5.visible = false
        p6.visible = false
        p7.visible = false

        spawnAliens_p1()

        textSize(23)
        fill("black")
        text("Welcome to Planet 1!", width/2 - 100 , 20)   

        if (keyDown("space")) {
            laser = createSprite(spaceCraft.x, spaceCraft.y - 100)
            laser.addImage(laserImg)
            laser.velocityY = -5
            laser.scale = 0.4
            lasers.add(laser)
        }

        if (aliens1.isTouching(lasers)) {
            for (var i = 0; i < aliens1.length; i++) {
                if (aliens1[i].isTouching(lasers)) {
                    aliens1[i].destroy()
                    lasers.destroyEach()

                    alienCount1 = alienCount1 + 1
                }

            }
        }

        textSize(25)
        fill("black") 
        text("Alien Death Count : " + alienCount1 , 50  , 70 )
             if(alienCount1 >= 10){
            gState = "p2"
               }

    }

    // ------------------------------------ Planet 2 --------------------------------------------------
    if(gState == "p2"){

        p1.destroy()
        aliens1.destroyEach()
                 pView.visible = true
        p1.visible = false
        p2.visible = false
        p3.visible = false
        p4.visible = false
        p5.visible = false
        p6.visible = false
        p7.visible = false

        spawnAliens_p2()
            
        textSize(23)
        fill("black")
        text("Welcome to Planet 2!", width/2 - 100 , 20)   

        if (keyDown("space")) {
            laser = createSprite(spaceCraft.x, spaceCraft.y - 100)
            laser.addImage(laserImg)
            laser.velocityY = -5
            laser.scale = 0.4
            lasers.add(laser)
        }


        if (aliens2.isTouching(lasers)) {
            for (var i = 0; i < aliens2.length; i++) {
                if (aliens2[i].isTouching(lasers)) {
                    aliens2[i].destroy()
                    lasers.destroyEach()

                    alienCount2 = alienCount2 + 1
                }

            }
        }
 
        textSize(25)
        fill("black")
        text("Alien Death Count : " + alienCount2 , 50  , 70 )

        if(alienCount2 >= 10){
            gState = "p3"
        }
            }


    //--------------------------------------------------------------- planet 3 ----------------------------------------------------

    if(gState == "p3"){

        p2.destroy()
        aliens1.destroyEach()
        aliens2.destroyEach()

             pView.visible = true
        p1.visible = false
        p2.visible = false
        p3.visible = false
        p4.visible = false
        p5.visible = false
        p6.visible = false
        p7.visible = false
        spawnAliens_p3()

        textSize(23)
        fill("black")
        text("Welcome to Planet 3!", width/2 - 100 , 20)        

            if (keyDown("space")) {
            laser = createSprite(spaceCraft.x, spaceCraft.y - 100)
            laser.addImage(laserImg)
            laser.velocityY = -5
            laser.scale = 0.4
            lasers.add(laser)
        }

        for (var i = 0; i < aliens3.length; i++) {
            if (aliens3[i].isTouching(invi)) {
                aliens3[i].destroy()
                a3deathC -= 1
            }
        }   
             if (aliens3.isTouching(lasers)) {
            for (var i = 0; i < aliens3.length; i++) {
                if (aliens3[i].isTouching(lasers)) {
                    aliens3[i].destroy()
                    lasers.destroyEach()
                         alienCount3 = alienCount3 + 1
                }
                 }
        }
             textSize(25)
        fill("black")
        text("Alien Death Count : " + alienCount3 , 50  , 70 )
               fill("red")
        text("Chances : " + a3deathC , 50  , 110)
             if(a3deathC <= 0){
            gState = "p3"
            alienCount3 = 0
            a3deathC = 3 
        }
                if(alienCount3 >= 10){
            gState = "p4"
        }
            }

          //--------------------------------------------------------------- planet 4 ----------------------------------------------------

    if(gState == "p4"){

        p3.destroy()
        aliens1.destroyEach()
        aliens2.destroyEach()
        aliens3.destroyEach()

             pView.visible = true
        p1.visible = false
        p2.visible = false
        p3.visible = false
        p4.visible = false
        p5.visible = false
        p6.visible = false
        p7.visible = false

        spawnAliens_p4()

        textSize(23)
        fill("black")
        text("Welcome to Planet 4!", width/2 - 100 , 20)   

        if (keyDown("space")) {
            laser = createSprite(spaceCraft.x, spaceCraft.y - 100)
            laser.addImage(laserImg)
            laser.velocityY = -5
            laser.scale = 0.4
            lasers.add(laser)
        }

        for (var i = 0; i < aliens3.length; i++) {
            if (aliens4[i].isTouching(invi)) {
                aliens4[i].destroy()
                a4deathC -= 1
            }
        }   
             if (aliens4.isTouching(lasers)) {
            for (var i = 0; i < aliens4.length; i++) {
                if (aliens4[i].isTouching(lasers)) {
                    aliens4[i].destroy()
                    lasers.destroyEach()
                         alienCount4 = alienCount4 + 1
                }
                 }
        }
             textSize(25)
        fill("black")
        text("Alien Death Count : " + alienCount4 , 50  , 70 )
               fill("red")
        text("Chances : " + a4deathC , 50  , 110)
             if(a4deathC <= 0){
            gState = "p4"
            alienCount4 = 0
            a4deathC = 3 
        }
                if(alienCount4 >= 10){
            gState = "p5"
        }
            }







    //--------------------------------------------------------------- planet 5 ----------------------------------------------------

    if(gState == "p5"){
        p1.destroy()
        p2.destroy()
        p3.destroy()
        p4.destroy()
        aliens1.destroyEach()
        aliens2.destroyEach()
        aliens3.destroyEach()
        aliens4.destroyEach()

    
        pView.visible = true
        p1.visible = false
        p2.visible = false
        p3.visible = false
        p4.visible = false
        p5.visible = false
        p6.visible = false
        p7.visible = false
    
        spawnAliens_p5()
    
        textSize(23)
        fill("black")
        text("Welcome to Planet 5!", width/2 - 100 , 20)    
    
    
            if (keyDown("space")) {
            laser = createSprite(spaceCraft.x, spaceCraft.y - 100)
            laser.addImage(laserImg)
            laser.velocityY = -5
            laser.scale = 0.4
            lasers.add(laser)
        }

        for (var i = 0; i < aliens5.length; i++) {
            if (aliens5[i].isTouching(invi)) {
                aliens5[i].destroy()
                a5deathC -= 1
            }
        }   
    
        if (aliens5.isTouching(lasers)) {
            for (var i = 0; i < aliens5.length; i++) {
                if (aliens5[i].isTouching(lasers)) {
                    aliens5[i].destroy()
                    lasers.destroyEach()
    
                    alienCount5 = alienCount5 + 1
                }
    
            }
        }
    
        textSize(25)
        fill("black")
        text("Alien Death Count : " + alienCount5 , 50 , 70)
    
 
        fill("red")
        text("Chances : " + a5deathC , 50, 110)
    
        if(a5deathC <= 0){
            gState = "p5"
            alienCount5 = 0
            a5deathC = 3 
        }
        
       if(alienCount5 >= 10){
            gState = "p6"
        }
       
    }


    //------------------------------------------------ planet 6 -------------------------------------------------------
    if(gState == "p6"){
        p1.destroy()
        p2.destroy()
        p3.destroy()
        p4.destroy()
        p5.destroy()
        aliens1.destroyEach()
        aliens2.destroyEach()
        aliens3.destroyEach()
        aliens4.destroyEach()
        aliens5.destroyEach()

    
        pView.visible = true
        p1.visible = false
        p2.visible = false
        p3.visible = false
        p4.visible = false
        p5.visible = false
        p6.visible = false
        p7.visible = false
    
        spawnAliens_p6()
    
        textSize(23)
        fill("black")
        text("Welcome to Planet 6!", width/2 - 100 , 20)    
    
    
            if (keyDown("space")) {
            laser = createSprite(spaceCraft.x, spaceCraft.y - 100)
            laser.addImage(laserImg)
            laser.velocityY = -5
            laser.scale = 0.4
            lasers.add(laser)
        }

        for (var i = 0; i < aliens6.length; i++) {
            if (aliens6[i].isTouching(invi)) {
                aliens6[i].destroy()
                a6deathC -= 1
            }
        }   
    
        if (aliens6.isTouching(lasers)) {
            for (var i = 0; i < aliens6.length; i++) {
                if (aliens6[i].isTouching(lasers)) {
                    aliens6[i].destroy()
                    lasers.destroyEach()
    
                    alienCount6 = alienCount6 + 1
                }
    
            }
        }
    
        textSize(25)
        fill("black")
        text("Alien Death Count : " + alienCount6 , 50 , 70)
    
 
        fill("red")
        text("Chances : " + a6deathC , 50, 110)
    
        if(a6deathC <= 0){
            gState = "p6"
            alienCount6 = 0
            a6deathC = 3 
        }
        
       if(alienCount6 >= 10){
            gState = "p7"
        }
       
    }

    //------------------------------------------------ planet 7 -------------------------------------------------------
    if(gState == "p7"){
        p1.destroy()
        p2.destroy()
        p3.destroy()
        p4.destroy()
        p5.destroy()
        p6.destroy()
        aliens1.destroyEach()
        aliens2.destroyEach()
        aliens3.destroyEach()
        aliens4.destroyEach()
        aliens5.destroyEach()
        aliens6.destroyEach()
        
    
        pView.visible = true
        p1.visible = false
        p2.visible = false
        p3.visible = false
        p4.visible = false
        p5.visible = false
        p6.visible = false
        p7.visible = false
    
        spawnAliens_p7()
    
        textSize(23)
        fill("black")
        text("Welcome to Planet 7!", width/2 - 100 , 20)    
    
    
            if (keyDown("space")) {
            laser = createSprite(spaceCraft.x, spaceCraft.y - 100)
            laser.addImage(laserImg)
            laser.velocityY = -5
            laser.scale = 0.4
            lasers.add(laser)
        }

        for (var i = 0; i < aliens7.length; i++) {
            if (aliens7[i].isTouching(invi)) {
                aliens7[i].destroy()
                a7deathC -= 1
            }
        }   
    
        if (aliens7.isTouching(lasers)) {
            for (var i = 0; i < aliens7.length; i++) {
                if (aliens7[i].isTouching(lasers)) {
                    aliens7[i].destroy()
                    lasers.destroyEach()
    
                    alienCount7 = alienCount7 + 1
                }
    
            }
        }
    
        textSize(25)
        fill("black")
        text("Alien Death Count : " + alienCount7 , 50 , 70)
    
 
        fill("red")
        text("Chances : " + a7deathC , 50, 110)
    
        if(a7deathC <= 0){
            gState = "p7"
            alienCount7 = 0
            a7deathC = 3 
        }
        
       if(alienCount7 >= 1){
            aliens7.destroyEach()
            p7.destroy()
            
            textSize (100)
            fill("green")
            text("You won!" , 600 , 400)
        }
       
    }
}

//------------------------------------- creating alien 1 ------------------------------------------------------------------
function spawnAliens_p1() {
    if (frameCount % 100 == 0) {
        alien1 = createSprite(Math.round(random(100, width - 100)), -50)
        alien1.addImage(alienImg)
        alien1.velocityY = 2
        alien1.scale = 0.4
        aliens1.add(alien1)

    }
}

// ------------------------------------- creating alien 2 ------------------------------------------------------------------
function spawnAliens_p2() {
    if (frameCount % 70 == 0) {
        alien2 = createSprite(Math.round(random(100, width - 100)), -50)
        alien2.addImage(alien2Img)
        alien2.velocityY = 3
        alien2.scale = 0.2
        aliens2.add(alien2)

    }
}

//-------------------------------- creating alien 3 ------------------------------------------------------------------------
function spawnAliens_p3() {
    if (frameCount % 50 == 0) {
        alien3 = createSprite(Math.round(random(100, width - 100)), -50)
        alien3.addImage(alien3Img)
        alien3.velocityY = 3
        alien3.scale = 0.2
        aliens3.add(alien3)

    }
}

//-------------------------------- creating alien 4 ------------------------------------------------------------------------
function spawnAliens_p4() {
    if (frameCount % 45 == 0) {
        alien4 = createSprite(Math.round(random(100, width - 100)), -50)
        alien4.addImage(alien4Img)
        alien4.velocityY = 3
        alien4.scale = 0.2
        aliens4.add(alien4)

    }
}


//-------------------------------- creating alien 5 ------------------------------------------------------------------------
function spawnAliens_p5() {
    if (frameCount % 40 == 0) {
        alien5 = createSprite(Math.round(random(100, width - 100)), -50)
        alien5.addImage(alien5Img)
        alien5.velocityY = 3
        alien5.scale = 0.2
        aliens5.add(alien5)

    }
}


//--------------------------------- creating alien 6 -------------------------------------------------------------------------
function spawnAliens_p6() {
    if (frameCount % 35 == 0) {
        alien6 = createSprite(Math.round(random(100, width - 100)), -50)
        alien6.addImage(alien6Img)
        alien6.velocityY = 3
        alien6.scale = 0.4
        aliens6.add(alien6)

    }
}

//--------------------------------- creating alien 7 -------------------------------------------------------------------------
function spawnAliens_p7() {
    if (frameCount % 30 == 0) {
        alien7 = createSprite(Math.round(random(100, width - 100)), -50)
        alien7.addImage(alien7Img)
        alien7.velocityY = 3
        alien7.scale = 0.5
        aliens7.add(alien7)

    }
}









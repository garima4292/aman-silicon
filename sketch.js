var canvas;
var gameState = 0;
var c1, c2, c3, c4;
var rat, cheese; 
var gameState = "level1";
var play, story, control;

function preload(){
    cheeseImg = loadImage("images/cheese.png");
    catAni = loadAnimation("images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png");
    backImg = loadImage("images/background.jpg");
    back1Img = loadImage("images/background1.jpg")
    playImg = loadImage("images/play.png");
    storyImg = loadImage("images/story.png");
    controlImg = loadImage("images/controls.png");
    backBuImg = loadImage("images/backButton.png");
    homeImg = loadImage("images/homeButton.png")
    //catSd = loadSound("Sound.mp3");
}

function setup(){
    canvas = createCanvas(windowWidth-10, windowHeight-10);

    cheeseG = createGroup();
    //rat = createSprite(width/2, height/2, 50, 50);

    playButton = createSprite(width/2, height-100);
    playButton.addImage(playImg);
    playButton.scale = 0.9;

    storyButton = createSprite(width/2-500, 315+height/2);
    storyButton.addImage(storyImg);
    storyButton.scale = 0.8;

    controlButton = createSprite(width/2+500, 315+height/2);
    controlButton.addImage(controlImg);
    controlButton.scale = 0.8;

    backButton = createSprite(-650+width/2, -350+height/2, 50, 50);
    backButton.addImage(backBuImg);
    backButton.scale = 0.2;
    backButton.visible=false;

    homeButton = createSprite(width/2-50, 100, 50, 50);
    homeButton.addImage(homeImg);
    homeButton.scale = 0.3
    homeButton.visible=false;
    /*c1 = createSprite(650, 300, 50, 50);
    c1.addAnimation("running", catAni);
    c1.scale = 0.5;

    c2 = createSprite(750, 300, 50, 50);
    c2.addAnimation("running", catAni);
    c2.scale = 0.5;

    c3 = createSprite(850, 300, 50, 50);
    c3.addAnimation("running", catAni);
    c3.scale = 0.5;

    c4 = createSprite(950, 300, 50, 50);
    c4.addAnimation("running", catAni);
    c4.scale = 0.5;

    T1 = createSprite(random(0, 1000), random(0, 600), 50, 50);
*/    
    for(var i = 0; i<2; i++){
        for(var j = 0; j<2; j++){
            cheese = createSprite(80+(width-170)*i, 60+(height-130)*j, 50, 50);
            cheese.addImage(cheeseImg);
            cheeseG.add(cheese);
            cheese.scale = 0.4;
        }}
        cheeseG.setVisibleEach(false);
    }



  
    /*for(var i = 0; i<10; i++){
        cheese = createSprite(500, 100+40*i, 50, 50);
        cheese.addImage(cheeseImg);
        cheese.scale = 0.12;
    }

    for(var i = 0; i<5; i++){
        for(var j = 0; j<2; j++){
            cheese = createSprite(500+50*i, 100+400*j, 50, 50);
            cheese.addImage(cheeseImg);
            cheese.scale = 0.12;
        }
    }*/






function draw(){
 
    if(gameState === "home"){
        background(backImg);

        playButton.visible=true;
        storyButton.visible=true;
        controlButton.visible=true;
        homeButton.visible=false;
        cheeseG.setVisibleEach(false);

        if(mousePressedOver(playButton))
            gameState = "level1"
        
        if(mousePressedOver(storyButton))
            gameState = "homeStory"
        
        if(mousePressedOver(controlButton))
            gameState = "homeControls" 
    }

    
    
    if(gameState === "homeStory" || gameState === "homeControls"){
        background(back1Img);

        storyButton.visible=false;
        playButton.visible=false;
        controlButton.visible=false;
        homeButton.visible=true;
   
        if(mousePressedOver(homeButton))
            gameState="home";

        if(gameState === "homeStory"){
            fill("red");
            textSize(100)
            text("Story",width/2,height/2)
        }

        if(gameState === "homeControls"){
            fill("red");
            textSize(100)
            text("Controls",width/2,height/2)
        }
    }

    if(gameState === "level1"){
        background(255,255,153);

        playButton.visible = false;
        storyButton.visible=false;
        controlButton.visible=false;
        homeButton.visible=true;
        cheeseG.setVisibleEach(true);

        if(mousePressedOver(homeButton)){
            gameState = "home";
        }
    }
    

    drawSprites();
    //textSize(50);   
    //text(gameState,50,50);
}

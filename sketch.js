var db;
var position;
var canvas, bgImg;
var gameState = 0;
var playerCount, form, player, game, allPlayers;
var distance = 0;
var car1, car2, car3, car4, cars;
var track, c1, c2, c3, c4, ground;

function preload(){
    track = loadImage("images/track.jpg");
    c1 = loadImage("images/car1.png");
    c2 = loadImage("images/car2.png");
    c3 = loadImage("images/car3.png");
    c4 = loadImage("images/car4.png");
    ground = loadImage("images/ground.png");
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);

    db = firebase.database();
    player = new Player();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount == 4){
        game.update(1);
    }
if(gameState == 1){
    clear();
    game.play();
}
}


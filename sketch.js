const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //crear el cuerpo base del jugador
  playerBase = Bodies.rectangle(160, 600, 160, 340, { isStatic: true });
  World.add(world, baseimage);

  //crear el cuerpo del jugador
  player= Bodies.rectangle(160, 450, 160, 310, { isStatic: true });
  World.add(world, playerimage);


}

function draw() {
  background(backgroundImg);

  //mostrar la imagen del jugador utilizando la función image()

  push();
  imageMode(CENTER);
  image(baseimage, playerBase.position.x, playerBase.position.y, 160, 210);
  image(playerimage, player.position.x, player.position.y, 100, 150);
  pop();
  //mostrar la imagen de la base del jugador utilizando la función image()


  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}

// create a button 
let button
// allow us to access the canvas as html
// let cnv

let r = 0
let g = 0
let b = 0

let slider

let img

let webcam

function preload(){
  img = loadImage('stuart.png')
}

function setup() {
  // set the variable to store the html canvas
  // cnv = createCanvas(500, 500);

  createCanvas(window.innerWidth, window.innerHeight)

  button = createButton('click me')
  button.position(10, 10)

  // adjust the position of the html canvas
  // cnv.position(500,500)

  button.mousePressed(handleMousePress)
  // function foo(){}
  // () => {}
  // button.mousePressed( ()=>{
  //   console.log('button click inside anon function')
  // } )

  slider = createSlider(0, 100, 50, 50)
  slider.position(10, 35)

  webcam = createCapture(VIDEO)
}

function draw() {
  // background('navy');

  image(webcam, 0, 0)
  circle(mouseX, mouseY, 20)

  textSize(72)
  // background('white')
  text(slider.value(), width/2, height/2)

}

function handleMousePress(){
  console.log('button click')

  r = random(255)
  g = random(255)
  b = random(255)
  background(r, g, b)

  imageMode(CENTER)
  image(img, width/2, height/2)

  createImg("stuart.png")
}
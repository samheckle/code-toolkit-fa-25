let mic
let recorder

let recordingState = 0
let sounds = []

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  // setup the microphone to use the audio in class
  // https://p5js.org/reference/p5.sound/p5.AudioIn/
  mic = new p5.AudioIn()

  // start the mic and request the browser to ask for it
  mic.start()

  recorder = new p5.SoundRecorder()
  recorder.setInput(mic)
}

function draw() {
  // background(220);
  
  let micLevel = mic.getLevel() // gives us a value 0 - 1

  // map(value, start1, stop1, start2, stop2, [withinBounds])
  let mappedLevel = map(micLevel, 0, 1, 10, 100)

  console.log("original:" + micLevel)
  console.log("mapped: " + mappedLevel)

  let mapTest = map(4, 1, 10, 25, 30)
  console.log(mapTest)

  circle(mouseX, mouseY, mappedLevel)
  // noLoop()
}

function keyPressed(){
  if(keyCode == 32){
    if(recordingState == 0){

      if(sounds.length > 0 && sounds[sounds.length-1].isPlaying()){
        sounds[sounds.length-1].stop()
      }
      // creating a local sound file to store the recording
      let sound = new p5.SoundFile()

      // add that sound file to my global array to playback later
      sounds.push(sound)

      recorder.record(sound)
      
      background('red')

      recordingState = 1
    } else if(recordingState == 1){
      recorder.stop()

      background('lightpink')

      recordingState = 2
    } else if(recordingState == 2){
      sounds[sounds.length - 1].loop()

      background('lightgreen')
      recordingState = 0;
    }

  }
}
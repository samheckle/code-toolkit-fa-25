const s = ( sketch ) => {

  let webcam

  sketch.setup = () => {
    sketch.createCanvas(640, 480);
    webcam = sketch.createCapture(sketch.VIDEO)

    webcam.hide()
  };

  sketch.draw = () => {
    sketch.image(webcam, 0, 0)
  };
};
const s1 = ( sketch ) => {

  sketch.setup = () => {
    sketch.createCanvas(640, 480);
  };

  sketch.draw = () => {
    sketch.fill(255);
    sketch.rect(300,300,50,50);
    sketch.circle(sketch.mouseX, sketch.mouseY, 20)
  };
};

let myp5 = new p5(s, 'canvas1');
let myp5_1 = new p5(s1, 'canvas2');
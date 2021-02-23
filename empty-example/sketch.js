
var song;

function setup() {
  song = loadSound('taylor.mp3');
  createCanvas(720, 600);
  background(255,0,0);
  amp = new p5.Amplitude();
  
  fft = new p5.FFT();
}

function draw() {
  background(220);
  
  
  var c = 0;
  var vol = amp.getLevel();
  
  var diam = map(vol, 0, 1, 10, 400);
  
  var spectrum = fft.analyze();
  
  // for (var i = 0; i < spectrum.length; i++){
  // 	c = spectrum[i];
  // }
  // console.log(c)
  fill(0,255,0);
  ellipse(width/2, height/2, diam, diam);
}


function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();

  } else {
    song.play();
    background(0,255,0);
  }
}

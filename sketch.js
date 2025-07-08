let spacing = 30;
let cols, rows;

function setup() {
  createCanvas(600, 600);
  cols = floor(width / spacing);
  rows = floor(height / spacing);
  noStroke();
  fill(0);
}

function draw() {
  background(255);

  let t = millis() * 0.002; // time in seconds, slow it down

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * spacing + spacing / 2;
      let y = j * spacing + spacing / 2;

      // Create an offset based on position
      let offset = (i + j) * 0.3;

      // Sine wave pulse with offset
      let wave = sin(t + offset);

      // Map wave to radius size
      let r = map(wave, -1, 1, 4, 12); // min/max size

      ellipse(x, y, r);
    }
  }
}

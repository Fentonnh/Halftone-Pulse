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

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * spacing + spacing / 2;
      let y = j * spacing + spacing / 2;
      ellipse(x, y, 8);
    }
  }
}

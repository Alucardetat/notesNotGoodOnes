/*******************
 * OUR HELPER CODE *
 *******************/

const gridWidth = 10;
let isMouseDown = false;

// Helper function to handle painting a square
function paintSquare(square, currentBrushColor) {
  square.classList.replace(square.classList[1], currentBrushColor);
}

// Create the initial canvas squares
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

/***********
 * QUERIES *
 ***********/

const paletteColors = document.querySelectorAll('.palette-color');
const canvasSquares = document.querySelectorAll('.square');
const brush = document.querySelector('.icons');
const app = document.querySelector('.app');

/**************************
 * EVENT LISTENER FUNCTIONS *
 **************************/

// Function to handle clicking one particular square
function handleSquareClick(square) {
  const currentBrushColor = document.querySelector('.icons').classList[1]; // Corrected class name for query
  paintSquare(square, currentBrushColor);
}

// Function to handle clicking one particular palette color
function handlePaletteColorClick(color) {
  const colorClass = color.classList[1];
  brush.className = `icons ${colorClass}`; // Updated class assignment for brush
}

// Function to handle mouseover on canvas squares
function handleSquareMouseover(square) {
  if (isMouseDown) {
    const currentBrushColor = document.querySelector('.icons').classList[1]; // Corrected class name for query
    paintSquare(square, currentBrushColor);
  }
}

// Function to handle mouseup and mousedown on the entire app
function handleAppMouseEvents(event) {
  isMouseDown = event.type === 'mousedown';
}

/**************************
 * WIRING IT ALL TOGETHER *
 **************************/

// Add event listeners for palette colors
paletteColors.forEach((color) => {
  color.addEventListener('click', () => handlePaletteColorClick(color));
});

// Add event listeners for canvas squares
canvasSquares.forEach((square) => {
  square.addEventListener('click', () => handleSquareClick(square));
  square.addEventListener('mouseover', () => handleSquareMouseover(square));
});

// Add event listeners for mousedown and mouseup on the entire app
app.addEventListener('mousedown', handleAppMouseEvents);
app.addEventListener('mouseup', handleAppMouseEvents);
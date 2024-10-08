import * as readline from 'readline';

// Define your animation frames
const frames: string[] = [
  'Frame 1\n*  *\n****\n',
  'Frame 2\n ** \n****\n',
  'Frame 3\n  **\n****\n',
  'Frame 4\n ** \n****\n',
];

let currentFrame = 0;
let isRunning = true;
let fps = 100;

// Set up readline interface to capture user input
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Function to display animation frames in a loop
function animate() {
  if (isRunning) {
    // Clear the console
    console.clear();
    // Display the current frame
    console.log(frames[currentFrame]);
    // Move to the next frame, looping back to the first
    currentFrame = (currentFrame + 1) % frames.length;
  }

  // Call the function again after 500ms (0.5s)
  if (isRunning) {
    setTimeout(animate, fps);
  }
}

// Start animation
animate();

// Listen for 'q' key press to exit
process.stdin.on('keypress', (str, key) => {
  if (key.name === 'q') {
    isRunning = false;
    console.clear();
    console.log('Exited the animation.');
    process.exit();
  }
});

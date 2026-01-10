// Global Variables
var i = 0;           // Tracks the current position of the orange marble
var timer;           // Stores the interval 
var direction = 1;   // 1 = Move Right, -1 = Move Left 

// Function to handle the movement
function moveMarble() {
    // 1. Get all marble images
    var marbles = document.getElementsByTagName("img");

    // 2. Turn the current marble back to Gray (marble1)
    marbles[i].src = "marble1.jpg";

    // 3. Calculate the next index
    i = i + direction;

    // Boundary check
    if (i >= marbles.length) {
        i = 0; // Wrap around to the start
    } else if (i < 0) {
        i = marbles.length - 1; // Wrap around to the end (for reverse)
    }

    // 4. Turn the next marble to Orange (marble2)
    marbles[i].src = "marble2.jpg";
}

// Function to Start the Animation
function startAnim() {
    // Clear existing timer first
    clearInterval(timer);
    // Run moveMarble every 1 second
    timer = setInterval(moveMarble, 1000);
}

// Function to Stop the Animation
function stopAnim() {
    clearInterval(timer);
}

// Bnouss : Reverse Direction
function reverseDirection() {
    // Flip the direction: if 1 becomes -1, if -1 becomes 1
    direction = direction * -1;
    console.log("Direction reversed! Now moving: " + direction);
}
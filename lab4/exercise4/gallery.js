// Updated path to include the folder name
var images = [
    "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];

var i = 0; 
var timer; 

function nextPic() {
    if (i < images.length - 1) {
        i++;
        document.getElementById("myImage").src = images[i];
    } else {
        console.log("Reached last image.");
    }
}

function prevPic() {
    if (i > 0) {
        i--;
        document.getElementById("myImage").src = images[i];
    } else {
        console.log("Reached first image.");
    }
}

function startSlideShow() {
    clearInterval(timer);

    // Start the loop
    timer = setInterval(function() {
        i++; // Move to next
        
        // If we go to the end, go back to 0
        if (i >= images.length) {
            i = 0;
        }

        document.getElementById("myImage").src = images[i];
    }, 2000); //  2 seconds
}

function stopSlideShow() {
    clearInterval(timer);
}
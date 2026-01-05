// Calculate circle area
function calculateCircleArea() {
    var input = prompt("What is the value of your circle's radius:");
    var radius = Number(input); 

    if (isNaN(radius) || input === "" || input === null) {
        alert("Error: Please enter a valid number for the radius.");
    } else {
        var area = Math.PI * Math.pow(radius, 2);
        alert("Total area of the circle is " + area);
    }
}

// Calculate square root
function calculateSquareRoot() {
    var input = prompt("What is the value you want to calculate its square root:");
    var value = Number(input);

   
    if (isNaN(value) || input === "" || input === null) {
        alert("Error: Please enter a valid number.");
    } else if (value < 0) {
        alert("Error: Cannot calculate the square root of a negative number.");
    } else {
        var result = Math.sqrt(value);
        alert("square root of " + value + " is " + result);
    }
}

calculateCircleArea();
calculateSquareRoot();
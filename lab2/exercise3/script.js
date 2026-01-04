// Calculate circle areaa
function calculateCircleArea() {
    var radius = prompt("What is the value of your circle's radius:");
    
    // Formula: Area = PI * r^2
    var area = Math.PI * Math.pow(radius, 2);
    
    alert("Total area of the circle is " + area);
}

// Calculate square root
function calculateSquareRoot() {
    var value = prompt("What is the value you want to calculate its square root:");
    
    var result = Math.sqrt(value);
    
    alert("square root of " + value + " is " + result);
}


calculateCircleArea();
calculateSquareRoot();
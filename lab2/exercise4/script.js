function arrayOperations() {
    var numbers = [];
    for (var i = 0; i < 3; i++) {
        var val = prompt("Enter number " + (i + 1) + " for mathematical operations:");
        numbers.push(Number(val));
    }

    // Sum
    var sum = numbers[0] + numbers[1] + numbers[2];
    // Multiplication
    var mul = numbers[0] * numbers[1] * numbers[2];
    // Division
    var div = numbers[0] / numbers[1] / numbers[2];

    document.write("<h1>Adding -- Multiplying -- and dividing 3 values</h1><hr>");
    
    // Sum output
    document.write("<p style='color: red;'>sum of the 3 values " + 
        numbers[0] + "+" + numbers[1] + "+" + numbers[2] + " = " + sum + "</p>");
    
    // Multiplication output
    document.write("<p style='color: red;'>multiplication of the 3 values " + 
        numbers[0] + "*" + numbers[1] + "*" + numbers[2] + " = " + mul + "</p>");
    
    // Division output
    document.write("<p style='color: red;'>division of the 3 values " + 
        numbers[0] + "/" + numbers[1] + "/" + numbers[2] + " = " + div + "</p>");
}

arrayOperations();
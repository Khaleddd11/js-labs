//1
function checkParams(a, b) {
    if (arguments.length !== 2) {
        throw new Error("Function accepts only 2 parameters. You passed " + arguments.length);
    }
    console.log("Success: Exactly 2 parameters passed.");
}

// 2
function reverseParams() {
    var argsArray = Array.from(arguments);
    return argsArray.reverse();
}

//3
function addNumbers() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error("All parameters must be numerical values.");
        }
        sum += arguments[i];
    }
    return sum;
}

//4
function getDayName(dateString) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
        "Thursday", "Friday", "Saturday"];
    var date = new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
        return "Invalid Date String";
    }
    console.log(date.getTime());
    return days[date.getDay()];
}


//testing
try {
    checkParams(10, 20); 
    // checkParams(10, 20,40); 
    
    console.log("Reversed Params:", reverseParams(1, 2, 3, 4,5));

    console.log("Sum of numbers:", addNumbers(10, 20, 30.5));
    //console.log("Sum of numbers:", addNumbers(10, 20, 30.5));

    var dateInput = prompt("Enter a date (YYYY-MM-DD) to get the day name:");
    alert("The day is: " + getDayName(dateInput));

} catch (e) {
    console.error(e.message);
}
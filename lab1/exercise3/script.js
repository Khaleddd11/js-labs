var sum=0;
var input;

while (true) {
    input = prompt("Enter a number (0 to stop)");
    var num = Number(input);

    if (isNaN(num)) {
        alert("Please enter a valid numeric value.");
        continue;
    }

    if (num == 0) break;

    sum += num;

    if (sum > 100) {
        alert("Sum exceeded 100!");
        break;
    }
}

alert("The total sum is: " + sum);
// 1. Validate Name (Must be string and not a number)
var userName;
do {
    userName = prompt("Enter your name:");
} while (!userName || !isNaN(userName));

// 2. Validate Birth Year (Must be number and < 2010)
var birthYear;
do {
    birthYear = prompt("Enter your birth year (must be before 2010):");
    birthYear = Number(birthYear);
} while (isNaN(birthYear) || birthYear >= 2010 || birthYear <= 0);

// 3. Calculate Age 
var age = 2026 - birthYear;

// 4. Write to page
document.write("<u><b>Name:</b></u> " + userName + "<br>");
document.write("<u><b>Birth year:</b></u> " + birthYear + "<br>");
document.write("<u><b>Age:</b></u> " + age);
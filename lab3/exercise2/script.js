function userTable() {
    //  Ask for number of persons
    var count;
    do {
        var input = prompt("Enter the no. of persons:");
        count = Number(input);
        //  Must be a number and greater than 0
    } while (isNaN(count) || input === "" || input === null || count <= 0);

    var users = []; // Helper array to store the data

    // Ask for users' information sequentially
    for (var i = 0; i < count; i++) {
        var userName;
        var userAge;

        // Validate Name (length > 3 & length < 10)
        do {
            userName = prompt("Enter user" + (i + 1) + " name (length > 3 and < 10):");
        } while (!userName || userName.length <= 3 || userName.length >= 10);

        // Validate Age ( > 10 & < 60)
        do {
            userAge = prompt("Enter user" + (i + 1) + " age (must be > 10 and < 60):");
            userAge = Number(userAge);
        } while (isNaN(userAge) || userAge <= 10 || userAge >= 60);

        // Save valid data to our array
        users.push({ name: userName, age: userAge });
    }

    document.write("<style>");
    document.write("table { border-collapse: collapse; width: 200px; margin: 20px; }");
    document.write("th, td { border: 3px solid black; padding: 5px; text-align: left; }");
    document.write("th { text-align: center; font-weight: bold; }");
    document.write("</style>");

    document.write("<table>");
    
    // Table Header
    document.write("<tr>");
    document.write("<th>Name</th>");
    document.write("<th>Age</th>");
    document.write("</tr>");

    // Table row dataa
    for (var j = 0; j < users.length; j++) {
        document.write("<tr>");
        document.write("<td>" + users[j].name + "</td>");
        document.write("<td>" + users[j].age + "</td>");
        document.write("</tr>");
    }

    document.write("</table>");
}

// Run the task
userTable();
var message = prompt("Enter your message:");

for (var i = 1; i <= 6; i++) {
    //build html tags
    document.write("<h" + i + ">" + message + "</h" + i + ">");
}
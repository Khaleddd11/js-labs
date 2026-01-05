function arraySorting() {
    var arr = [];
    for (var i = 0; i < 5; i++) {
        var val = prompt("Enter value " + (i + 1) + ":");
        arr.push(Number(val));
    }

    document.write("<h1>Sorting</h1><hr>");
    document.write("<p style='color: red;'>u've entered the values of " + arr.join(", ") + "</p>");


    var descending = arr.slice().sort(function(a, b) { return b - a; });
    document.write("<p style='color: red;'>ur values after being sorted descending " + descending.join(",") + "</p>");

    var ascending = arr.slice().sort(function(a, b) { return a - b; });
    document.write("<p style='color: red;'>ur values after being sorted ascending " + ascending.join(",") + "</p>");
}

arraySorting();

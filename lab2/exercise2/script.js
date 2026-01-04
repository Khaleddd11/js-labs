function checkPalindrome() {
    var str = prompt("Enter a string to check if it is a palindrome:");
    
    //(OK = Yes, Cancel = No)
    var considerCase = confirm("Do you want to consider case sensitivity?\n(OK for Yes, Cancel for No)");

    var originalStr = str;
    var changedStr = str;

    // If user chosed NO (Cancel)
    if (considerCase === false) {
        changedStr = str.toLowerCase();
    }

    // Reverse the string to compare
    var reversedStr = changedStr.split('').reverse().join('');

    // Logic Check
    if (changedStr === reversedStr) {
        alert("The string '" + originalStr + "' IS a palindrome.");
    } else {
        alert("The string '" + originalStr + "' is NOT a palindrome.");
    }
}

checkPalindrome();

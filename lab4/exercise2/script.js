// 1. Function for Numbers (0-9 and dot)
function EnterNumber(num) {
    var inp = document.getElementById("Answer");
    inp.value += num;
}

// 2. Function for Operators (+, -, *, /)
function EnterOperator(operator) {
    var inp = document.getElementById("Answer");
    inp.value += operator;
}

// 3. Function for Clear (C)
function EnterClear() {
    var inp = document.getElementById("Answer");
    inp.value = "";
}

// 4. Function for Equals (=)
function EnterEqual() {
    var inp = document.getElementById("Answer");
    var result = inp.value;
    try {
        inp.value = eval(result);
    } catch (e) {

        inp.value = "Error";
    }
}
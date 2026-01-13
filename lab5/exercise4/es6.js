let x = 5;
let y = 10;

console.log(`Before Swap: x = ${x}, y = ${y}`);

[x, y] = [y, x];

console.log(`After Swap:  x = ${x}, y = ${y}`);
 


/* ------------------------------------------------------------- */

var myArray = [10, 5, 20, 3, 100, 55];

function findMinMax(name1, name2, ...oters) {
    

    var maxValue = Math.max(...args);
    var minValue = Math.min(...args);

    // return them as an array or object
    return [minValue, maxValue];
}

var result = findMinMax(...myArray);

console.log("Min Value: " + result[0]);
console.log("Max Value: " + result[1]);
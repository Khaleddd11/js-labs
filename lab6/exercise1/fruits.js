var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a. Test that every element is a string
var isAllString = fruits.every(fruit => typeof fruit === "string");
console.log("a. Are all strings?: " + isAllString); 


// b. Test that some elements start with a
var startsWithA = fruits.some(fruit => fruit.startsWith("a"));
console.log("b. Some start with 'a'?: " + startsWithA);


// c. Filter elements starting with b or s
var filteredFruits = fruits.filter(fruit => fruit.startsWith("b") || fruit.startsWith("s"));
console.log("c. Filtered (b or s):", filteredFruits);


// d. Generate new array declaring you like the fruit
var likeFruits = fruits.map(fruit => `I like ${fruit}`);
console.log("d. Mapped Array:", likeFruits);
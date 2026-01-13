import { Shape, Rectangle, Square, Circle } from './shapes.js';

try {

    let r1 = new Rectangle(10, 20);
    let s1 = new Square(5);
    let c1 = new Circle(3);

    console.log(r1.toString());
    console.log(s1.toString());
    console.log(c1.toString());

    // should be 3
    console.log(`Total Shapes Created: ${Shape.getCount()}`);

    // should fail
    console.log("Attempting to create a second rectangle");
    let r2 = new Rectangle(5, 5); 

} catch (error) {
    console.error(error.message); 
}
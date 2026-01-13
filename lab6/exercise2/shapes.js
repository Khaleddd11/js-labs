// shapes.js

export class Shape {
    static count = 0; 

    constructor() {
     Shape.count++;
    }

    static getCount() {
        return Shape.count;
    }
    
    // toString to be overridden
    toString() {
        return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
}

export class Rectangle extends Shape {
    static hasInstance = false; 

    constructor(width, height) {

        if (Rectangle.hasInstance) {
            throw new Error("You can only create one rectangle!");
        }
        
        super(); // Call parent constructor to count it
        this.width = width;
        this.height = height;
        Rectangle.hasInstance = true; // Mark as created
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    toString() {
        return `Rectangle - ${super.toString()}`;
    }
}

export class Square extends Shape {
    static hasInstance = false;

    constructor(side) {
        if (Square.hasInstance) {
            throw new Error(" You can only create one sqaure!");
        }

        super();
        this.side = side;
        Square.hasInstance = true;
    }

    area() {
        return this.side * this.side;
    }

    perimeter() {
        return 4 * this.side;
    }

    toString() {
        return `Square - ${super.toString()}`;
    }
}

export class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return (Math.PI * this.radius * this.radius).toFixed(2);
    }

    perimeter() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }

    toString() {
        return `Circle - ${super.toString()}`;
    }
}
class Book {
    constructor(title, numOfChapters, author, numOfPages, publisher, numOfCopies) {
        this.title = title;
        this.numOfChapters = numOfChapters;
        this.author = author;
        this.numOfPages = numOfPages;
        this.publisher = publisher;
        this.numOfCopies = numOfCopies;
    }
}

class Box {
    constructor(height, width, length, material) {
        this.height = height;
        this.width = width;
        this.length = length;
        this.material = material;
        this.content = [];
        
        this.volume = height * width * length; 
        this.numOfBooks = 0; 
    }
    

    // Create book object and add to content
    addBook(title, numOfChapters, author, numOfPages, publisher, numOfCopies) {
        let book = {
            title: title,
            numOfChapters: numOfChapters,
            author: author,
            numOfPages: numOfPages,
            publisher: publisher,
            numOfCopies: numOfCopies
        };
        
        this.content.push(book);
        this.numOfBooks++; 
        console.log(`Added: "${title}"`);
    }

    deleteBook(title) {
        const initialCount = this.content.length;
        
   
        this.content = this.content.filter(book => book.title !== title);

        this.numOfBooks = this.content.length;

        if (this.content.length < initialCount) {
            console.log(`Deleted: "${title}"`);
        } else {
            console.log(`Not Found: "${title}"`);
        }
    }

    // Requirement (e): valueOf() implementation
    // This allows (box1 + box2) to return the sum of their books
    valueOf() {
        return this.numOfBooks;
    }

    toString() {
        return `
        Box Details:
        - Dimensions: ${this.height} x ${this.width} x ${this.length}
        - Volume: ${this.volume}
        - Material: ${this.material}
        - Books Count: ${this.numOfBooks}
        `;
    }
}



console.log("--- Creating Box 1 ---");
let box1 = new Box(10, 10, 10, "Wood");
box1.addBook("Harry Potter", 15, "J.K. Rowling", 300, "Bloomsbury", 1000);
box1.addBook("Clean Code", 12, "Robert Martin", 400, "Pearson", 500);

console.log("--- Creating Box 2 ---");
let box2 = new Box(20, 20, 20, "Cardboard");
box2.addBook("Intro to Algorithms", 20, "Cormen", 800, "MIT Press", 200);


console.log(box1.toString());


console.log("Total Books (Box1 + Box2): " + (box1 + box2)); 


box1.deleteBook("Harry Potter");
console.log(`Books in Box 1 after delete: ${box1.numOfBooks}`);
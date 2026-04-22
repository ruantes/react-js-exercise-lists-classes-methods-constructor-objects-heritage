//Exercise 01
class Book {
    constructor(title, author){
        this.bookTitle = title;
        this.author = author;
    }
}

const book01 = new Book("Notes from the Underground", "Fiodor Dostoiévski")
const book02 = new Book("The Hound of the Baskervilles", "Arthur Conan Doyle")

console.log("The name of the book is " + book01.bookTitle + " by " + book01.author)
console.log("The name of the book is " + book02.bookTitle + " by " + book02.author)

//Exercise 02
class Person {
    constructor(name){
        this.personName = name
    }
}

const personName = new Person("Hello! My name is " + personName)

//Exercise 03
class Retangle {
    constructor(widht, height){
        this.retangleWidth = widht;
        this.retangleHeight = innerHeight;
    }

    calculateArea(){
        return this.retangleWidth * this.retangleHeight;
    }
}

//Exercise 04
class Car {
    constructor(brand, speed){
        this.brandCar = brandCar;
        this.speedCapacity = speed;
    }
accelerate(){
    return this.speedCapacity += 10;
}
}
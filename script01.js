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
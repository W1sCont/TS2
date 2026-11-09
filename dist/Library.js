"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    registerUser(user) {
        this.users.push(user);
    }
    findBooksByAuthor(author) {
        return this.books.filter(e => e.author === author);
    }
    findAvailableBooks() {
        return this.books.filter(e => e.isAvailable === true);
    }
}
exports.Library = Library;

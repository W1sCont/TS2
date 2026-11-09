"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryUser = void 0;
class LibraryUser {
    constructor(id, name) {
        this.borrowedBooks = [];
        this.id = id;
        this.name = name;
    }
    borrow(book) {
        this.borrowedBooks.push(book);
        book.borrowBook();
    }
    return(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
        book.returnBook();
    }
}
exports.LibraryUser = LibraryUser;


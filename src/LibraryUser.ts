import { User } from "./interface";
import { Book } from "./interface";
import { LibraryBook } from "./LibraryBook";

export class LibraryUser implements User{
    id: number;
    name: string;
    borrowedBooks: Book[] = [];

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    borrow(book: LibraryBook): void{
        this.borrowedBooks.push(book);
        book.borrowBook();
    }

    return(book: LibraryBook): void{
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
        book.returnBook();
    }
}

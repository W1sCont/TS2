import { LibraryBook } from "./LibraryBook";
import { LibraryUser } from "./LibraryUser";

export class Library{
    books: LibraryBook[] = [];
    users: LibraryUser[] = [];

    addBook(book: LibraryBook): void{
        this.books.push(book);
    }

    registerUser(user: LibraryUser): void{
        this.users.push(user);
    }

    findBooksByAuthor(author: string): LibraryBook[]{
        return this.books.filter(e => e.author === author);
    }

    findAvailableBooks(): LibraryBook[]{
        return this.books.filter(e => e.isAvailable === true);
    }
}

import { Book } from "./interface";

export class LibraryBook implements Book{
    title: string;
    author: string;
    publishedYear: number;
    genre: string;
    isAvailable: boolean;

    constructor(title: string, author: string, publishedYear: number, genre: string) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.genre = genre;
        this.isAvailable = true;
    }
    borrowBook(): void {
        this.isAvailable = false;
    }

    returnBook(): void {
        this.isAvailable = true;
    }
}
export interface Book{
        title: string;
        author: string;
        publishedYear: number;
        genre: string;
        isAvailable: boolean;
    }

export interface User{
    id: number;
    name: string;
    borrowedBooks: Book[];
}
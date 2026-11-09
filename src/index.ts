import * as readline from 'readline';
import { Library } from "./Library";
import { LibraryBook } from "./LibraryBook";
import { LibraryUser } from "./LibraryUser";

const askQuestion = (question: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(question, (answer: string) => {
            resolve(answer);
        });
    });
};

const showChoice = async (): Promise<string> => {
    const choice = await askQuestion("Введіть значення: ");
    return choice;
};

const addBook = async () => {
    const title = await askQuestion("Введіть назву книги: ");
    const author = await askQuestion("Введіть автора: ");
    const publishedYear = await askQuestion("Введіть рік публікації: ");
    const year = parseInt(publishedYear);
    const genre = await askQuestion("Введіть жанр: ");

    library.addBook(new LibraryBook(title, author, year, genre));
}

const addUser = async () => {
    const name = await askQuestion("Введіть ім'я: ");
    library.registerUser(new LibraryUser(idCount++, name));
}

const showBooks = async () => {
    const booksList = library.findAvailableBooks();
    booksList.forEach(e => {
        console.log(e.title + " || " + e.author + " || " + e.publishedYear + " || " + e.genre);
    });
}

const showUsers = async () => {
    library.users.forEach(e => {
        console.log(e.id + " || " + e.name);
    });
}

const userAddBook = async () => {
    const userId = await askQuestion("Введіть ід користувача: ");
    const user = library.users.find(e => e.id === parseInt(userId));
    if(!user){
        console.log("Користувача не знайдено!\n");
        return;
    }
    const bookTitle = await askQuestion("Введіть назву книги: ");
    const book = library.books.find(e => e.title === bookTitle);
    if(!book){
        console.log("Книгу не знайдено!\n");
        return;
    }
    user.borrow(book);
}

const userReturnBook = async () => {
    const userId = await askQuestion("Введіть ід користувача: ");
    const user = library.users.find(e => e.id === parseInt(userId));
    if(!user){
        console.log("Користувача не знайдено!\n");
        return;
    }
    const bookTitle = await askQuestion("Введіть назву книги: ");
    const book = library.books.find(e => e.title === bookTitle);
    if(!book){
        console.log("Книгу не знайдено!\n");
        return;
    }
    user.return(book);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let idCount = 0;
let library = new Library();

const user1 = new LibraryUser(
    idCount++,
    "Ivan"
);

const user2 = new LibraryUser(
    idCount++,
    "Nazar"
);

const book1 = new LibraryBook(
    "Kobzar",
    "T.Shewchenko",
    1840,
    "poezia"
);

const book2 = new LibraryBook(
    "Moisei",
    "I. Franko",
    1905,
    "poema"
);

library.addBook(book1);
library.addBook(book2);

library.registerUser(user1);
library.registerUser(user2);


const menu = "1-Додати книгу, 2-Додати користувача, 3-Доступні книги, 4-Всі користувачі, 5-Взяти/Повернути книгу, 0-Вийти";
const subMenu = "1-Взяти книгу, 2-Повернути книгу, 0-Вийти";

const main = async () => {
    let start = true;
    let choise = "";

    let subStart = true;
    let subChoise = "";

    do{
        console.log(menu);
        choise = await showChoice();
        switch(choise){
            case("1"):
                await addBook();
                break;
            case("2"):
                await addUser();
                break;
            case("3"):
                await showBooks();
                break;
            case("4"):
                await showUsers();
                break;
            case("5"):
                do{
                    console.log(subMenu);
                    subChoise = await showChoice();
                    switch(subChoise){
                        case("1"):
                            await userAddBook();
                            break;
                        case("2"):
                            await userReturnBook();
                            break;
                        case("0"):
                            subStart = false;
                            break;
                    }
                }while(subStart);
                break;
            case("0"):
                start = false;
                break;
        }
    }while(start);
    rl.close();
}

main();
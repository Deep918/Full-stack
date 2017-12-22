import { Injectable } from '@angular/core';
import { one } from './initial-books';

@Injectable()
export class BookService extends one{
    constructor() {
        super();
        console.log("Initializing Books service ...");
        this.load();
    }

    getBookCount() {
        let books = JSON.parse(localStorage.getItem('books'));
        return books.length;
    }

    getBooks(){
        let books = JSON.parse(localStorage.getItem('books'));
        return books;
    } 

    getBook(id: any) {
    let books = JSON.parse(localStorage.getItem('books'));
    let book:any = null;
    for (let i = 0; i < books.length; i++) {
      if (books[i].id == id) {
       book = books[i];
        break;
      }
    }
    return book;
  }

  addBook(newBook: any) {
    let books = JSON.parse(localStorage.getItem('books'));
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
  }

 updateBook(updatedBook: any) {
    let books = JSON.parse(localStorage.getItem('books'));
    for (let i = 0; i < books.length; i++) {
      if (books[i].id == updatedBook.id) {
        books[i] = updatedBook;
      }
    }
    localStorage.setItem('books', JSON.stringify(books));
  }
  deleteBook(id: any) {
    let books = JSON.parse(localStorage.getItem('books'));
    for (let i = 0; i < books.length; i++) {
      if (books[i].id == id) {
        books.splice(i, 1);
      }
    }
    localStorage.setItem('books', JSON.stringify(books));
  }

}
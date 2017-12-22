import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BookService } from "../../book.service";

@Component({
  selector: 'addebook-form',
  templateUrl: './add-book.component.html'
})
export class AddBook {
  genres: string[] = ["Action", "Adventure", "Education", "Fiction", "Romantic", "Thriller"];
  formats: string[] = ["Paperback", "Hardcover", "PDF"];

  constructor(private _bookService: BookService, private router: Router) { }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null, 8));
    let bookCount = this._bookService.getBookCount();
    let newBook = {
          id: bookCount + 1,
          title: formValue.title,
          author: formValue.author,
          isbn: formValue.isbn,
          price: formValue.price,
          publicationDate: formValue.publicationDate,
          publisher: formValue.publisher,
          genre: formValue.genre,
          format: formValue.format
        };
    this._bookService.addBook(newBook);
    this.router.navigate(['allbook']);
  }
}
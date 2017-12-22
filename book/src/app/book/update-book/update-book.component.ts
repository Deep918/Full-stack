import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BookService } from "../../book.service";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html'
})
export class UpdateBook {
  genres: string[] = ["Action", "Adventure", "Education", "Fiction", "Romantic", "Thriller"];
  formats: string[] = ["Paperback", "Hardcover", "PDF"];

  constructor(private _bookService: BookService, private route: ActivatedRoute, private router: Router) { }
  id: any;
  book: any;

  ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
          this.id = +params['id'];
      });
      this.book = this._bookService.getBook(this.id);
  }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let updatedBook = {
        id: this.book.id,
          title: formValue.title,
          author: formValue.author,
          publisher: formValue.publisher,
          isbn: formValue.isbn,
          publicationDate: formValue.publicationDate,
          price: formValue.price,
          
          genre: formValue.genre,
          format: formValue.format
        };
    this._bookService.updateBook(updatedBook);
    this.router.navigate(['allbook']);
  }
}
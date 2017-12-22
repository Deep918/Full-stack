import { Component, OnInit } from '@angular/core';
import { BookService } from "../../book.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
//import "rxjs/add/operator/map";
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    id: any;
    book: any;
    

  constructor(private _bookService: BookService, private route: ActivatedRoute, private location: Location) {
    
   }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
    this.book = this._bookService.getBook(this.id);
    
    //console.log(this.books);
    //return this.books;
  }
   goBack(): void {
        this.location.back();

}
}
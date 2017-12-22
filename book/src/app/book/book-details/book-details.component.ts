import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { NgModule } from '@angular/core';
 
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailComponent implements OnInit {
  books: any;
  namefilter: string="";

  title: boolean=true;
  author: boolean=true;
  isbn: boolean=true;
  publisher: boolean=true;
  publicationDate: boolean=true;
  format: boolean=true;
  genre: boolean=true;
  price: boolean=true;
  deleteBooks: any[]=[];

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this.books= this._bookService.getBooks();
    console.log(this.books);
  }
checkBox(id: any){
  if(this.deleteBooks.find(x=>x==id))
  this.deleteBooks.splice(this.deleteBooks.indexOf(id),1)
  else
  this.deleteBooks.push(id);
  console.log(this.deleteBooks);
}
deleteMultiple(): void{
  for(var i=0;i<this.deleteBooks.length; i++){
    this._bookService.deleteBook(this.deleteBooks[i]);

  }
  this.books=this._bookService.getBooks();
}
deleteBook(id: any){
  this._bookService.deleteBook(id);
  this.books=this._bookService.getBooks();
}
}
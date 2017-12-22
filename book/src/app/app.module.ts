import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book/book.component';
import {BookService } from './book.service';
import { BookDetailComponent } from './book/book-details/book-details.component';
import { BookFilterPipe } from './book/bookfilter.pipe';
import {routing} from './app.routing';
import { AddBook} from './book/add-book/add-book.component';
import { UpdateBook} from './book/update-book/update-book.component';
//import { UpdateBoComponent } from './book/update-bo/update-bo.component';
//import { UpdateBookComponent } from './book/update-book/update-book.component';
//import { DeleteBookComponent } from './book/delete-book/delete-book.component';
//import { BookDetailsComponent } from './book/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent, BookFilterPipe, AddBook, UpdateBook, UpdateBook, BookDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing
  ],
  providers: [BookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book/book-details/book-details.component';
import { BookComponent} from './book/book/book.component';
import {AddBook} from './book/add-book/add-book.component';
import {UpdateBook} from './book/update-book/update-book.component';
//import {BookSummary} from './book/bookSummary.component';
//import {About} from './book/About.component';
const appRoute =[
    {path: 'allbook', component: BookDetailComponent },

    {path: 'allbook/:id', component: BookComponent},
    {path: 'addbook', component: AddBook},

    {path: 'editbook/:id', component: UpdateBook},
  //  {path: 'booksummary', component: BookSummary},
    //{path: 'about', component: About}
];
export const routing = RouterModule.forRoot(appRoute);
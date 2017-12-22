import { Component } from '@angular/core';
import {BookComponent} from './book/book/book.component';
import {NgModule} from '@angular/core';
import {BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  declarations: [BookComponent, AppComponent]
})
export class AppComponent {
  title:string = 'My book store';
}
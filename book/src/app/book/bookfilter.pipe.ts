import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'bookFilter'})
export class BookFilterPipe implements PipeTransform {
    transform(books: any[], searchby: string): any[] {
        let filter: string = searchby ? searchby.toLocaleLowerCase() : null;
        return filter ? books.filter((book) =>
            book.author.toLocaleLowerCase().startsWith(filter) != false) : books;
    }
}
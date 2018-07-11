import { Component, OnInit } from '@angular/core';

import { IBook } from './book';
import { BookService } from './book.service';

@Component({
  //selector: 'lib-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  pageTitle: string = 'Book List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;
  
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
}
set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
}

  filteredBooks: IBook[];
  books: IBook [] = [];

  performFilter(filterBy: string): IBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((book: IBook) =>
          book.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(private _bookService: BookService) {
 
   }

  ngOnInit(): void {
    this._bookService.getBooks()
           .subscribe(books => {
             this.books = books;
             this.filteredBooks = this.books;
           },
                     error => this.errorMessage = <any>error);

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IBook } from './book';
import { BookService } from './book.service';

@Component({
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  pageTitle: string = 'Book Detail';
  errorMessage: string;
  book: IBook;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.book = {
      "id": id,
      "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51XY8E8S7SL._SX322_BO1,204,203,200_.jpg",
      "author": "Tom Holland",
      "title": "Rubicon: The Last Years of the Roman Republic",
      "isbn": "9781400078974",
      "yearpublished": 2005,
      "rating": 3,
      "status": "Read"
    }
  }
    onBack(): void {
      this._router.navigate(['/books']);
    }

}
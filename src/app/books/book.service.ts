import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { throw } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { IBook } from './book';

@Injectable({
providedIn: 'root'
})
export class BookService {
  private _bookUrl = './assets/books.json';

    constructor(private _http: HttpClient) { }

    getBooks(): Observable<IBook[]> {
        return this._http.get<IBook[]>(this._bookUrl)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))))
            .pipe(catchError(this.handleError));
    }

    getBook(id: number): Observable<IBook> {
        return this.getBooks()
            .pipe(map((books: IBook[]) => books.find(b => b.id === id)));
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}

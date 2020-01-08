/* tslint:disable:quotemark */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Book} from '../model/book-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getBooks() {
    return this.http.get<Book[]>('api/books').pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
  }

}

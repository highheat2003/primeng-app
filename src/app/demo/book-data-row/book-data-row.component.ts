import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book-data';


@Component({
  selector: 'app-book-data-row',
  templateUrl: './book-data-row.component.html',
  styleUrls: ['./book-data-row.component.css']
})
export class BookDataRowComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  onRowEditInit(book: Book) {
    console.log('Row edit initialized');
  }

  onRowEditSave(book: Book) {
    console.log('Row edit saved');
  }

  onRowEditCancel(book: Book, index: number) {
    console.log('Row edit cancelled');
  }
}

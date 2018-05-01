import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any[];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) {
    // this.bookService.getBooks().subscribe(books => {
    //     // console.log(books);
    //     this.books = books;
    // });
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
        .subscribe(books => this.books = books);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/Book';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class BookService {
  private baseUrl = 'http://localhost:3000/api/books';  // URL to web api


  constructor( public http:Http ) {}

  getBooks() {
    return this.http.get(this.baseUrl)
        .map(res => res.json());
  }

}

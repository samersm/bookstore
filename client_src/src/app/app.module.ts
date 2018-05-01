import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/books/add-book/add-book.component';
import { EditBookComponent } from './pages/books/edit-book/edit-book.component';
import { BookDetailsComponent } from './pages/books/book-details/book-details.component';
import { AppRoutingModule } from './config/app-routing.module';
import { BookService } from './services/book.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    BooksComponent,
    AddBookComponent,
    EditBookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

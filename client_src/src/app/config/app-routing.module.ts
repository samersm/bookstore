import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AddBookComponent } from '../pages/books/add-book/add-book.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new-book', component: AddBookComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

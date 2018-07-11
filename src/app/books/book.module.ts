import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookGuardService } from './book-guard.service';
import { BookService } from './book.service';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule.forChild ([
      { path: 'books', component: BookListComponent },
      { path: 'books/:id', 
       canActivate:[ BookGuardService],
       component: BookDetailComponent },
      ])
  ],
  declarations: [
    BookListComponent,
    BookDetailComponent
  ],
  providers: [
    BookService,
    BookGuardService]
})
 
export class BookModule { }

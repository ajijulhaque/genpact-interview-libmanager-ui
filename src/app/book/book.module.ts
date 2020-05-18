import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [
      CommonModule,
      BookRoutingModule,
      MatPaginatorModule,
      MatTableModule
    ],
    declarations: [BookComponent]
  })
  export class BookModule { }
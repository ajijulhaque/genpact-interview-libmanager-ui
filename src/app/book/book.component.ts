import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibApiService } from '../services/lib-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ItemModel } from '../models/item-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private route: ActivatedRoute, private libApiService: LibApiService) { }

  ngOnInit(): void {
    this.populateBooks();
  }
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  bookData: MatTableDataSource<ItemModel>;
  books: ItemModel[];
  displayedColumns: string[]=['id','name','genre', 'author'];
  populateBooks() {
    this.libApiService.getBooksByLibId(parseInt(this.route.snapshot.paramMap.get('libId'))).subscribe((data: any)=>{
      this.books = data.body;
      this.bookData = new MatTableDataSource<ItemModel>(this.books);
      this.bookData.paginator = this.paginator;
    }, (err)=>{
      console.log("Error occurred ");
      
    })
  }

}

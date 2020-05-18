import { Component, OnInit, ViewChild } from '@angular/core';
import { LibraryModel } from '../models/library-model';
import { LibApiService } from '../services/lib-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private libApiService: LibApiService, private router: Router) { }

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  
  ngOnInit(): void {
    this.populateLibs();
  }
  populateLibs() {
    this.libApiService.getAllLibraries().subscribe((data: any)=>{
      this.libs = data.body;
      this.libData = new MatTableDataSource<LibraryModel>(this.libs);
      this.libData.paginator = this.paginator;
    }, (err)=>{
      console.log("Error occurred ");
      
    })
  }
  showBooks(libId){
    this.router.navigate(['/book',{libId:libId}]);
  }
  libs: LibraryModel[];
  libData: MatTableDataSource<LibraryModel>;
  
  displayedColumns: string[]=['id','name','type', 'description'];
}

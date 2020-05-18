import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { BookComponent } from './book/book.component';


const routes: Routes = [{
  path:'',
  redirectTo: '/library',
  pathMatch: 'full'
},{
  path: 'library',
  component: LibraryComponent
},{
  path: 'book',
  loadChildren: ()=> import('./book/book.module').then(x=>x.BookModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

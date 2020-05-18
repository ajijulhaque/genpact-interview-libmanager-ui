import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LibraryModel } from '../models/library-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibApiService {
  
  libUrl: string = environment.baseUrl+environment.libUrl;
  getAllLibraries() :Observable<any>{
    return this.httpClient.get(this.libUrl);
  }
  getBooksByLibId(libId: number) :Observable<any> {
    return this.httpClient.get(this.libUrl+"/"+libId);
  }
  constructor(private httpClient: HttpClient) { }
}

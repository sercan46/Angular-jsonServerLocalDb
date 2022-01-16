import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }

  getCategories(): Promise<CategoryModel[]>{
   return this.http.get<CategoryModel[]>('http://localhost:3002/categories').toPromise();
  }
}

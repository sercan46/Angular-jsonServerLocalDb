import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(): Promise<ProductModel[]>{
   return this.http.get<ProductModel[]>('http://localhost:3001/products').toPromise();
  }

  addProduct(product:ProductModel){
    return this.http.post('http://localhost:3001/products',product).toPromise();
  }

  deleteProduct(id){
    return this.http.delete(`http://localhost:3001/products/${id}`).toPromise();
  }

  updateProduct(id,body){
    return this.http.put(`http://localhost:3001/products/${id}`,body).toPromise();
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllProductService {
   constructor(private http: HttpClient) { }
  
    getalldata () {
     return this.http.get("https://fakestoreapi.com/products");
    }
  getallcategories () {
     return this.http.get("https://fakestoreapi.com/products/categories");
  }
  databycategories (keyword : string) {
    return this.http.get("https://fakestoreapi.com/products/category/"+keyword); 
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsDetailsService{

  constructor(private http:HttpClient) { }

  getproductbyid (id :  any) {
    return this.http.get('https://fakestoreapi.com/products/'+id); 
  }
  
}


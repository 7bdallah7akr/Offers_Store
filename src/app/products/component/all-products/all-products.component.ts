import { Event, RouterLink } from '@angular/router';
import { Component, EventEmitter,  } from '@angular/core';
import { AllProductService } from '../../services/all-products/all-product.service';
import { error } from 'node:console';
import { SpinnerComponent } from '../../../shared/component/spinner/spinner.component';

import { ProductComponent } from '../../../shared/component/product/product.component';


@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [ 
    SpinnerComponent, 
    ProductComponent ,
    RouterLink ,
    
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  constructor(private service: AllProductService) {}
  data : any[] = [];
  categories : any[] = [];
  loading :boolean = false ;
  cartproduct : any[] = [];

  ngOnInit(): void {
   this.getdata()
   this.getcategories()
   }

   
   getdata () {
    this.loading = true ;
    this.service.getalldata().subscribe((res:any) =>{
      this.data = res;
      this.loading = false ;
    } , error=>{
      alert("Error")
      this.loading = false ;
    })
   }

   getcategories () {
    this.loading = true ;
    this.service.getallcategories().subscribe((res:any) =>{
      this.categories = res;
      this.loading = false ;
    } , error=>{
      alert("Error")
      this.loading = false ;
    })
   }
   filtercategories(event : any){
    let value : any = event.target.value
    value == "All" ? this.getdata() : this.getdatabycategories(value)
   }
   getdatabycategories(keyword : string){
      this.loading = true ;
      this.service.databycategories(keyword).subscribe((res:any) =>{
      this.data = res;
      this.loading = false ;
    })
   }
   
  addToCart(event:any){
    if( "cart" in localStorage){
      this.cartproduct = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartproduct.find(ele => ele.item.id == event.item.id)
      if(exist){
        alert("This product is already in your Cart.")
      }else{
        this.cartproduct.push(event)
       localStorage.setItem( "cart" , JSON.stringify(this.cartproduct))
      }
    }else{
      this.cartproduct.push(event)
      localStorage.setItem( "cart" , JSON.stringify(this.cartproduct))
    }
  }
}

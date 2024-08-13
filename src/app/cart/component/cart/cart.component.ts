import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartproduct : any[] = [];
  Total : any = 0;

  ngOnInit(): void {
    this.getcartproduct()
  }
  getcartproduct(){
  if( "cart" in localStorage){
    this.cartproduct = JSON.parse(localStorage.getItem("cart")!)
   }
   this.getCartTotal()
  }
  addAmount(index : number){
    this.cartproduct[index].quantity++
    this.getCartTotal()
    localStorage.setItem( "cart" , JSON.stringify(this.cartproduct))
  }
  minsAmount(index : number){
    this.cartproduct[index].quantity--
    this.getCartTotal()
    localStorage.setItem( "cart" , JSON.stringify(this.cartproduct))
  }
  detectChange(){
    this.getCartTotal()
    localStorage.setItem( "cart" , JSON.stringify(this.cartproduct))
  }
  deleteProduct(index : number){
    this.cartproduct.splice(index , 1)
    this.getCartTotal()
    localStorage.setItem( "cart" , JSON.stringify(this.cartproduct))
  }
  clearPorduct(){
    this.cartproduct = []
    this.getCartTotal()
    localStorage.setItem( "cart" , JSON.stringify(this.cartproduct))
  }
  getCartTotal(){
    this.Total = 0;
    for(let x in this.cartproduct){
      this.Total += this.cartproduct[x].item.price * this.cartproduct[x].quantity
    }
  }
}

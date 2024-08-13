import { ProductsDetailsComponent } from './products/component/products-details/products-details.component';
import { Routes } from '@angular/router';
import { AllProductsComponent } from './products/component/all-products/all-products.component';
import { CartComponent } from './cart/component/cart/cart.component';

export const routes: Routes = [
    {path:'products' , component:AllProductsComponent} ,
    {path: 'details/:id' , component:ProductsDetailsComponent},
    {path: 'cart' , component:CartComponent},
    {path:'**' , redirectTo:'products' , pathMatch:'full'}
];

import { ProductsDetailsService } from './../../services/products-details/products-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerComponent } from "../../../shared/component/spinner/spinner.component";
import { error } from 'console';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit{
  id:any;
  data : any = {};
  loading :boolean = false ;

  constructor(private route:ActivatedRoute , private service : ProductsDetailsService){
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getproduct()
  }
  getproduct(){
    this.loading = true;
    this.service.getproductbyid(this.id).subscribe(res =>{
      this.loading = false;
      this.data = res;
    },error =>{
      this.loading = false;
      alert(error)
    })
  }
}

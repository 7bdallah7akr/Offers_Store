import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms' ;
import { Event, RouterLink } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() info : any = {} ;
  @Output() item = new EventEmitter();
  addbutton :boolean = false ;
  amount : number = 0;



  add() {
    this.item.emit({ item : this.info , quantity : this.amount}
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  loggedUser : any;

  constructor(private router:Router) {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
       this.loggedUser = JSON.parse(localStorage.getItem('loggedUser')!);
    } else {
      console.log('localStorage localStorage is not defined');
    }
  }  
  dAccount(){
    localStorage.removeItem('userInfo')
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl("/register");
  }
}

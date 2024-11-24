import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loggedUser : any;

  constructor(private router:Router) {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      const localUser = localStorage.getItem('loggedUser')
      if(localUser != null){
        this.loggedUser = JSON.parse(localUser);
      }   
    } else {
      console.log('localStorage is not defined');
    }
  }  
 
  logOut(){
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl("/login");
    
  }

}

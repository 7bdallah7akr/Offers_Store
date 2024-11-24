import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router:Router){}
  singUpObj : any = {
  }
  register(){
    if(this.singUpObj.name == null || this.singUpObj.email == null || this.singUpObj.password == null){
      alert('please fill data')
    }else{
      const localUser = localStorage.getItem('userInfo')
    if(localUser != null){
      const users =JSON.parse(localUser);
      users.push(this.singUpObj);
      localStorage.setItem('userInfo' , JSON.stringify(users));
    }else{
      const users = [];
      users.push(this.singUpObj);
      localStorage.setItem('userInfo' , JSON.stringify(users));
    } 
    alert('Registration Success')
    this.router.navigateByUrl("login");
   }
    }
    
}

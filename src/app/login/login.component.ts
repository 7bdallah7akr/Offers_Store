import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}
  loginObj : any = {
  }
  login(){
    if( this.loginObj.email == null || this.loginObj.password == null){
      alert('please fill data')
    }else{
      const localUser = localStorage.getItem('userInfo')
    if(localUser != null){
      const users = JSON.parse(localUser!);

      const check = users.find((user:any)=> user.email == this.loginObj.email && user.password == this.loginObj.password);
      if(check != undefined){
        alert('Login Successful')
        localStorage.setItem('loggedUser' , JSON.stringify(check))
        this.router.navigateByUrl("/home");
      }else{
        alert('Email or password is wrong')
      }
    }
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){}

msg :string =''
  fazerlogin(login:string, senha:string):void{
    if (login.trim() === "admin" && senha.trim() === "admin")
      {
        this.router.navigate(['pages/principal']);
        
      } 
      else
      {
        this.msg = "Digite um login e senha válidos..."
      }

  }

}

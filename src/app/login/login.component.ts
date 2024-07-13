import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  email:any;
  passWord: any; // Inicializa a senha vazia
  showPassword: boolean = false; // Controla a visibilidade da senha

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  emailAcesso = 'joabTeste@email.com';
  senha = '123456789'

  validarUsuario(email:any, passWord:any){

    // console.log("email", email);
    // console.log("passWord", passWord);

    if(email !== this.emailAcesso || passWord !== this.senha)
    {
      alert('Creendencias inválidas');
    } else {
      localStorage.setItem('token', '123456789');
      this.router.navigate(['home']);
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService
    ) {
      
    }

  loginForm = this.fb.group({
    Nome: ['', [Validators.required, Validators.minLength(3)]],
    Senha: ['',[Validators.required,Validators.minLength(3)]]
  });

  ngOnInit() {
  }
  
  usuario = new Usuario(0, "", "");
  usuarioteste = new Usuario(0, "", "");
  teste1: String;
  onSubmit(){
    this.usuario.Nome = this.loginForm.value.Nome.toString();
    this.usuario.Senha = this.loginForm.value.Senha.toString();
      this.authService.ValidarUsuario(this.usuario);
    }
}

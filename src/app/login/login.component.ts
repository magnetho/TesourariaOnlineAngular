import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password: ['',[Validators.required,Validators.minLength(3)]]
  });

  ngOnInit() {
  }
  
    onSubmit(user: Usuario){
      console.log(user);
    }
}

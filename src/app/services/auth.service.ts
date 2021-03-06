import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public httpClient: HttpClient, public router: Router) { }

  get UsuarioLogado(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }

  SalvarContextoUsuario(usuario: Usuario)
  {
    localStorage.setItem('user', JSON.stringify(usuario));
  }

  ValidarUsuario(usuario: Usuario){
    const params = new HttpParams({
      fromObject:{
        'Nome': usuario.Nome,
        'Senha': usuario.Senha
      }
    });
    this.httpClient.get<Usuario>(environment.apiServer + "login", {params})
                    .subscribe(data => {
                      if(data != null)
                      {
                        this.SalvarContextoUsuario(data);
                        this.router.navigate(['admin']);
                      }
                      else
                      {
                        alert("email ou senha incorretos");
                      }
                    });
  }

  Logout(){
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements  CanActivate{
  constructor(
    private authService: AuthService, 
    private router: Router
    ){

    }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean | UrlTree {
      
     // return true;
      if(this.authService.UsuarioLogado)
        return this.authService.UsuarioLogado;
      else
        return this.router.parseUrl("/login");
    }
}

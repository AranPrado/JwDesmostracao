import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // Verificar se o usuário está autenticado (simulação simples)
    const isAuthenticated = this.checkAuthentication();

    if (isAuthenticated) {
      return true;
    } else {
      // Redirecionar para a página de login se não estiver autenticado
      return this.router.parseUrl('/login');
    }
  }

  checkAuthentication() {
    const token = localStorage.getItem('token');
    if(token !== null){
        return true;
    } else {
        return false;
    }
  }
}

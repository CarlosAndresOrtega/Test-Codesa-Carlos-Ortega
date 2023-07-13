import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/service/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Guard para proteger la ruta del dashboard.
 * Redirige al inicio de sesión si el usuario no ha iniciado sesión.
 */

@Injectable({
  providedIn: 'root',
})
export class dashBoardGuard implements CanActivate {

  /**
   * Constructor del guard del dashboard.
   * @param {AuthService} authSvc - Servicio de autenticación.
   * @param {Router} router - Router para redireccionar.
   */
  constructor(private authSvc: AuthService, private router: Router) {}

  /**
   * Método para activar el guard del dashboard.
   * @returns {Observable<boolean> | boolean} - Observable o booleano indicando si se puede activar o no la ruta.
   */
  canActivate(): Observable<boolean> | boolean {
    if(!this.authSvc.isLoggedIn()){
      this.router.navigate(['/Login/']);
    }
    return this.authSvc.isLoggedIn();
  }
  
}

import { CanActivate } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from '../../core/service/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Guard para verificar si el usuario ya ha iniciado sesión.
 * Redirige al dashboard si el usuario ya ha iniciado sesión.
 */
@Injectable({
  providedIn: 'root',
})
export class checkLoginGuard implements CanActivate {
  /**
   * Constructor del guard para verificar el inicio de sesión.
   * @param {AuthService} authSvc - Servicio de autenticación.
   * @param {Router} router - Router para redireccionar.
   */
  constructor(private authSvc: AuthService, private router: Router) {}

  /**
   * Método para activar el guard de verificación de inicio de sesión.
   * @returns {Observable<boolean> | boolean} - Observable o booleano indicando si se puede activar o no la ruta.
   */
  canActivate(): Observable<boolean> | boolean {
    if(this.authSvc.isLoggedIn()){
      this.router.navigate(['/dashboard/']);
    }
    return !this.authSvc.isLoggedIn();
    
  }
  
}

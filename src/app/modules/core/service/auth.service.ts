import { Injectable } from '@angular/core';
import { userLogin } from '../../shared/models/user.interface';
import { Observable,of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  /**
   * Observable que indica si el usuario está autenticado.
   * @type {Observable<boolean>}
   */
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  
  /**
   * Clave utilizada para almacenar los datos del 
   * usuario en el almacenamiento local.
   * @type {string}
   */
  private localStorageKey = 'currentUser';


  /**
   * Crea una instancia del servicio de autenticación.
   * @param {Router} router - El enrutador de Angular.
   */
  constructor(private router: Router) { }

  /**
   * Observable que indica si el usuario está autenticado.
   * @type {Observable<boolean>}
   */
  get isLogged(): Observable<boolean>{
    return this.loggedIn$.asObservable();
  }

  /**
   * Realiza el proceso de inicio de sesión.
   * @param {string} username - El nombre de usuario.
   * @param {string} password - La contraseña.
   * @returns {Observable<any>} - Un Observable con los datos del usuario.
   */
  login(username: string, password: string): Observable<any> {
    const user: userLogin = { username: username, password: password };
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
    this.router.navigate(['/dashboard/']);
    this.loggedIn$.next(true);
    return of(user);
  }
  /**
   * Realiza el proceso de cierre de sesión.
   */
  logout(): void {
    localStorage.removeItem(this.localStorageKey);
    this.router.navigate(['/Login/']);
    this.loggedIn$.next(false);
  }

  /**
   * Verifica si el usuario está autenticado.
   * @returns {boolean} - Un valor booleano que indica si el usuario está autenticado.
   */
  isLoggedIn(): boolean {
    if(localStorage.getItem(this.localStorageKey)){
      return true
    }else{
      return false
    }
  }

  /**
   * Obtiene los datos del usuario actualmente autenticado.
   * @returns {userLogin | null} - Los datos del usuario o null si no hay usuario autenticado.
   */
  getCurrentUser(): userLogin | null {
    const userString = localStorage.getItem(this.localStorageKey);
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }
}

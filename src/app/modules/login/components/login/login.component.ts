import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/core/service/auth.service';
import { userLogin } from 'src/app/modules/shared/models/user.interface';


/**
 * Componente de inicio de sesión.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  /**
   * Datos de inicio de sesión, usuario usado por defecto.
   * @type {userLogin}
   */
  dataLogin: userLogin = {
    username: 'admin',
    password: '12345',
  };

  /**
   * Constructor del componente de inicio de sesión.
   * @param {AuthService} authSvc - Servicio de autenticación.
   */

  constructor(private authSvc: AuthService) {}

  /**
   * Método para manejar el evento de envío del formulario de inicio de sesión.
   * Verifica las credenciales y realiza el inicio de sesión.
   * Muestra una alerta si las credenciales no coinciden con las predefinidas.
   * @returns {void}
   */
  onSubmit(): void {
    if (
      this.dataLogin.username == 'admin' &&
      this.dataLogin.password == '12345'
    ) {
      this.authSvc.login(this.dataLogin.username, this.dataLogin.password);
    } else {
      alert('Usuario no registrado, Ingrese por favor con el usuario admin');
    }
  }
}

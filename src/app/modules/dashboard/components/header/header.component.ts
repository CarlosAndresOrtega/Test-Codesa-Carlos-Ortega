import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { AuthService } from 'src/app/modules/core/service/auth.service';
import {
  faArrowRightFromBracket,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Componente del header de la aplicación.
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * Icono de flecha y puerta, para sslir de la aplicación
   * @type {IconDefinition}
   */

  faArrowRightFromBracket = faArrowRightFromBracket;

  /**
   * Icono de ñadir un nuevo usuario
   * @type {IconDefinition}
   */
  faUserPlus = faUserPlus;

  /**
   * Constructor de la clase.
   * @param auth El servicio de autenticación utilizado en la clase.
   */
  constructor(private auth: AuthService) {}

  /**
   * Emision del evento agregar un usuario, para activar el
   * componente <app-user-form>
   */
  @Output() addUserEvent = new EventEmitter();

  /**
   * Método para cerrar sesión.
   */
  Logout(): void {
    this.auth.logout();
  }
  /**
   * Método para agregar un usuario, se activa al clickear,
   * el boton de añadir.
   */
  addUser(): void {
    this.addUserEvent.emit();
  }
}

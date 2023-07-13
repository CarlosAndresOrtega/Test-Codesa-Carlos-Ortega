import { Component} from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import {
  DataUser,
  DefaultUser,
} from 'src/app/modules/shared/models/user.interface';
import { UserService } from 'src/app/modules/shared/services/User/user.service';

/**
 * Componente de lista de usuarios.
 */
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent{

  /**
   * Icono de lápiz cuadrado para editar usuario.
   * @type {IconDefinition}
   */

  faPenToSquare = faPenToSquare;

  /**
   * Icono de papelera para eliminar usuario.
   * @type {IconDefinition}
   */
  faTrash = faTrash;

  /**
   * Arreglo de usuarios.
   * @type {DataUser[]}
   */
  users: DataUser[] = [];

  /**
   * Observable de usuarios.
   * @type {Observable<DataUser[]>}
   */
  data$: Observable<DataUser[]>;

  /**
   * Usuario seleccionado.
   * @type {DataUser}
   */
  userSelected: DataUser = DefaultUser;

  /**
   * Índice del usuario seleccionado.
   * @type {number}
   */
  userSelectedIndex: number = 0;
  
  /**
   * Indicador de si se está agregando un usuario nuevo.
   * @type {boolean}
   */
  isAdding = false;

  
  /**
   * Indicador de si se debe mostrar el formulario de usuario.
   * @type {boolean}
   */
  showUserForm = false;

  /**
   * Constructor del componente de lista de usuarios, se subscribe al observable, para notar los cambios
   * en los datos de los usuarios.
   * @param {UserService} user - Servicio de usuarios.
   */
  constructor(private user: UserService) {
    this.data$ = this.user.getEvent;
    this.data$.pipe().subscribe((res) => {
      this.users = res;
    });
  }

  /**
   * Método para ir a editar un usuario y setear la varible que sera enviada 
   * como user al componente <app-user-form>.
   * @param {DataUser} user - Usuario a editar.
   * @param {number} i - Índice del usuario en la lista.
   * @returns {void}
   */
  goToEditUser(user: DataUser, i: number): void {
    this.showUserForm = true;
    this.userSelected = user;
    this.userSelectedIndex = i;
    this.isAdding = false;
  }

  /**
   * Método para ir a agregar un nuevo usuario, al no setear la variable user
   * se entiende que se va agregar un nuevo usuario.
   * @returns {void}
   */
  goToAddUser(): void {
    this.showUserForm = true;
    this.isAdding = true;
  }

  /**
   * Método para actualizar un usuario, dependiendo de la variable isAdding, añade o actuliza el usuario.
   * @param {DataUser} event - Datos del usuario actualizado.
   * @returns {void}
   */
  updateUser(event: DataUser): void {
    if (!this.isAdding) {
      this.users[this.userSelectedIndex] = event;
      this.showUserForm = false;
    } else {
      this.users.push(event);
      this.showUserForm = false;
    }
    this.userSelected = DefaultUser;
    this.user.setEvent = this.users;
  }
  /**
   * Método para eliminar un usuario, confirma la acción de eliminar y 
   * envia el usuario a eliminar al servicio userService.
   * @param {DataUser} user - Usuario a eliminar.
   * @returns {void}
   */
  deleteUserSelected(user: DataUser): void {
    if (confirm('¿Estas seguro que quiere eliminar este usuario?')) {
      this.user.deleteUser(user);
    }
  }
  /**
   * Método que recibe el evento Emitido de cancelar, enviado por el boton cancelar del <app-user-form>.
   * @returns {void}
   */
  cancelAction():void {
    this.userSelected = DefaultUser;
    this.showUserForm = false;
  }
}

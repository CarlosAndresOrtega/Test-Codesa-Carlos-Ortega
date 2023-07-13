import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { DataUser } from '../../models/user.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Clase que define al UserServices, el cual segun la prueba solo se usa para la obtención y eliminación de datos.
 */
export class UserService {
  /**
   * Arreglo de objetos tipo DataUser, que inicializa la aplicación con unos usuarios iniciales
   * @type {Array<DataUser>}
   */
  users: DataUser[] = [
    {
      name: 'Oliva Cardenas',
      email: 'oliva1960@gmail.com',
      phone: '3285903569',
      direction: 'Cr 42 c # 56 c 83',
      img: 'https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png',
    },
    {
      name: 'Andres David',
      email: 'Andres@gmail.com',
      phone: '31345967831',
      direction: 'Cl. 18a #24-65',
      img: 'https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg',
    },
    {
      name: 'Tatiana Fuentes',
      email: 'tatifuentes2003@gmail.com',
      phone: '+57-3206807022',
      direction: 'Cra. 1 #46A-47',
      img: 'https://lapi.com.mx/web/image/product.template/4987/image_1024?unique=2e77332',
    },
  ];

  /**
   * Observable que emite los cambios en el arreglo de usuarios.
   * @type {BehaviorSubject<DataUser[]>}
   */
  private dataUsers$ = new BehaviorSubject<DataUser[]>(this.users);

  constructor() {}

  /**
   * Retorna un observable que emite los datos del arreglo de usuarios.
   * @returns {Observable<DataUser[]>} Observable que emite un arreglo de usuarios.
   */
  get getEvent(): Observable<DataUser[]> {
    return this.dataUsers$.asObservable();
  }

  /**
   * Establece los datos del arreglo de usuarios y emite los cambios.
   * @param {DataUser[]} data - Arreglo de usuarios actualizado.
   */

  set setEvent(data: DataUser[]) {
    this.users = data;
    this.dataUsers$.next(this.users);
  }
  
  /**
   * Elimina un usuario del arreglo y emite los cambios.
   * @param {DataUser} deleteUser - Usuario a eliminar.
   * @returns {void}
   */
  deleteUser(deleteUser: DataUser): void {
    const updatedUsers = this.users.filter((user) => user !== deleteUser);
    this.setEvent = updatedUsers;
  }
}

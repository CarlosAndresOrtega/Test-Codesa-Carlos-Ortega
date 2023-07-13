/**
 * Interfaz para representar los datos de inicio de sesión de un usuario.
 */
export interface userLogin {
  /**
   * Nombre de usuario.
   * @type {string}
   */
  username: string;

  /**
   * Contraseña del usuario.
   * @type {string}
   */
  password: string;
}

/**
 * Interfaz para representar los datos de un usuario.
 */
export interface DataUser {
  /**
   * Nombre del usuario.
   * @type {string}
   */
  name: string;
  /**
   * Correo electrónico del usuario.
   * @type {string}
   */
  email: string;
  /**
   * Teléfono del usuario.
   * @type {string}
   */
  phone: string;
  /**
   * Dirección del usuario.
   * @type {string}
   */
  direction: string;
  /**
   * (Opcional) URL de la imagen del usuario.
   * @type {string}
   */
  img?: string;
}

/**
 * Usuario por defecto cuando no se proporcionan datos.
 * @type {DataUser}
 */ 
export const DefaultUser: DataUser = {
  name: '',
  email: '',
  phone: '',
  direction: '',
  img: 'https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg',
};

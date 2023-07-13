import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faXmark, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import {
  DataUser,
  DefaultUser,
} from 'src/app/modules/shared/models/user.interface';

/**
 * Componente de formulario de usuario.
 */
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnChanges {
  /**
   * Icono de una X para cancelar la acción.
   * @type {IconDefinition}
   */
  faXmark = faXmark;

  /**
   * Icono de un disquet para guardar el usuario.
   * @type {IconDefinition}
   */
  faFloppyDisk = faFloppyDisk;

  /**
   * Usuario que llega como parametro al componente.
   */
  @Input() user: DataUser = DefaultUser;

  /**
   * Evento que se emite al guardar el usuario.
   * Contiene los datos actualizados del usuario.
   */
  @Output() saveUserEvent = new EventEmitter<DataUser>();

  /**
   * Evento que se emite al cancelar la acción.
   * No contiene datos adicionales.
   */
  @Output() cancelEvent = new EventEmitter<DataUser>();

  /**
   * Formulario de Angular que contiene los controles para el usuario.
   */
  miFormulario: FormGroup;

  /**
   * Constructor del componente.
   * Inicializa el formulario y los controles con sus validaciones.
   */
  constructor() {
    this.miFormulario = new FormGroup({
      name: new FormControl(this.user.name),
      email: new FormControl(this.user.email),
      phone: new FormControl(this.user.phone),
      direction: new FormControl(this.user.direction),
    });
  }
  /**
   * Obtener el control de nombre.
   */
  get name() {
    return this.miFormulario.get('name');
  }
  /**
   * Obtener el control de correo electrónico.
   */
  get email() {
    return this.miFormulario.get('email');
  }

  /**
   * Obtener el control de teléfono.
   */
  get phone() {
    return this.miFormulario.get('phone');
  }

  /**
   * Obtener el control de dirección.
   */
  get direction() {
    return this.miFormulario.get('direction');
  }

  /**
   * Método que se ejecuta cuando hay cambios en las propiedades de entrada.
   * Actualiza el formulario y los controles con las nuevas validaciones.
   */
  ngOnChanges(): void {
    this.miFormulario = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
        Validators.maxLength(35),
      ]),
      phone: new FormControl(this.user.phone, [
        Validators.required,
        Validators.pattern('[- +()0-9]+'),
        Validators.maxLength(15),
      ]),
      direction: new FormControl(this.user.direction, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  /**
   * Método para cancelar y emitir el evento de cancelación.
   */
  cancelSave(): void {
    this.cancelEvent.emit();
    this.resetForm();
  }

  /**
   * Método para guardar el usuario y emitir el evento correspondiente.
   * Setea los datos tomados en el formulario y los envia al componente padre.
   */
  saveUser(): void {
    if (this.miFormulario.valid) {
      const nameValue = this.miFormulario.get('name')?.value ?? '';
      const emailValue = this.miFormulario.get('email')?.value ?? '';
      const phoneValue = this.miFormulario.get('phone')?.value ?? '';
      const directionValue = this.miFormulario.get('direction')?.value ?? '';

      const editedUser: DataUser = {
        name: nameValue,
        email: emailValue,
        phone: phoneValue,
        direction: directionValue,
        img: this.user.img,
      };
      this.saveUserEvent.emit(editedUser);
      this.resetForm();
    }
  }
  /**
   * Método para restablecer el formulario a sus valores iniciales.
   */
  resetForm(): void {
    this.miFormulario.reset({
      name: '',
      email: '',
      phone: '',
      direction: '',
    });
  }

  /**
   * Método para obtener si hay errores en un campo específico.
   * @param campo El nombre del campo a verificar.
   * @returns Un valor booleano que indica si hay errores en el campo.
   */
  obtenerErrores(campo: string) {
    const control = this.miFormulario.get(campo);
    return control && control.errors && control.touched;
  }
}

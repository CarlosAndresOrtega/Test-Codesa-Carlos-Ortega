import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faXmark, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import {
  DataUser,
  DefaultUser,
} from 'src/app/modules/shared/models/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnChanges {
  faXmark = faXmark;
  faFloppyDisk = faFloppyDisk;

  @Input() user: DataUser = DefaultUser;

  @Output() saveUserEvent = new EventEmitter<DataUser>();
  @Output() cancelEvent = new EventEmitter<DataUser>();

  miFormulario: FormGroup;

  constructor() {
    this.miFormulario = new FormGroup({
      name: new FormControl(this.user.name),
      email: new FormControl(this.user.email),
      phone: new FormControl(this.user.phone),
      direction: new FormControl(this.user.direction),
    });
  }

  get name() {
    return this.miFormulario.get('name');
  }
  get email() {
    return this.miFormulario.get('email');
  }
  get phone() {
    return this.miFormulario.get('phone');
  }
  get direction() {
    return this.miFormulario.get('direction');
  }


  ngOnChanges(): void {
    this.miFormulario = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
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

  cancelSave(): void {
    this.cancelEvent.emit();
    this.resetForm();
  }

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
      };
      this.saveUserEvent.emit(editedUser);
      this.resetForm();
    }
  }

  resetForm(): void {
    this.miFormulario.reset({
      name: '',
      email: '',
      phone: '',
      direction: '',
    });
  }

  obtenerErrores(campo: string) {
    const control = this.miFormulario.get(campo);
    return control && control.errors && control.touched;
  }
}

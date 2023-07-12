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
import {
  DataUser,
  DefaultUser,
} from 'src/app/modules/shared/models/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() user: DataUser = DefaultUser;

  @Output() saveUserEvent = new EventEmitter<DataUser>();

  miFormulario: FormGroup;

  constructor() {
    this.miFormulario = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(this.user.phone, Validators.required),
      direction: new FormControl(this.user.direction, [Validators.required]),
    });

  }
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.miFormulario = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(this.user.phone, Validators.required),
      direction: new FormControl(this.user.direction, [Validators.required]),
    });
  }

  saveUser(): void {
    if (this.miFormulario.valid) {
      const nameValue = this.miFormulario.get('name')?.value ?? '';
      const emailValue = this.miFormulario.get('email')?.value ?? '';
      const phoneValue = this.miFormulario.get('phone')?.value ?? '';
      const directionValue = this.miFormulario.get('direction')?.value ?? '';

      console.log('Formulario válido');

      const editedUser: DataUser = {
        name: nameValue,
        email: emailValue,
        phone: phoneValue,
        direction: directionValue,
      };
      this.saveUserEvent.emit(editedUser);
      this.resetForm();
    } else {
      console.log('Formulario inválido');
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
}

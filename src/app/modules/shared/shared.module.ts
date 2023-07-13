import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/User/user.service';

/**
 * Modulo que comparte el userService en toda la aplicación
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ UserService],
  exports:[]
})
export class SharedModule { }

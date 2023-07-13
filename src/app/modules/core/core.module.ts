import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';


/**
 * Módulo de servicios esenciales.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[AuthService]
})
export class CoreModule { 

}

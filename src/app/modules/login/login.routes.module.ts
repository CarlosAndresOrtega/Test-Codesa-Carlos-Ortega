import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

/**
 * Rutas del módulo de inicio de sesión.
 */
const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
];
/**
 * Módulo de enrutamiento para el inicio de sesión.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

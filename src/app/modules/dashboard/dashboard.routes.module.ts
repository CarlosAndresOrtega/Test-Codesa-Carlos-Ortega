import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';

/**
 * Rutas del módulo del dashboard.
 */
const routes: Routes = [
  {
    path:'',
    component:UserListComponent,
  }
];
/**
 * Módulo de enrutamiento para el dashboard.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

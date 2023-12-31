import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { checkLoginGuard } from './modules/shared/guards/check-login.guard';
import { dashBoardGuard } from './modules/shared/guards/dashboard.guard';


/**
 * Rutas principales de la aplicación.
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full',
  },
  {
    path: 'Login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
    canActivate: [checkLoginGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [dashBoardGuard],
  },
];

/**
 * Módulo de enrutamiento principal de la aplicación.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

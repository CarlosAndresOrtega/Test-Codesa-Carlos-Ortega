import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DashboardRoutingModule } from './dashboard.routes.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule

  ]
})
export class DashboardModule { }

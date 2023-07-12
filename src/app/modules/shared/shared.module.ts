import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { checkLoginGuard } from './guards/check-login.guard';
import { UserService } from './services/User/user.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ UserService],
  exports:[]
})
export class SharedModule { }

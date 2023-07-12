import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/core/service/auth.service';
import { userLogin } from 'src/app/modules/shared/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  dataLogin:userLogin={
    username:"admin",
    password:"12345",
    
  }

  constructor(private authSvc: AuthService){

  }
  onSubmit(): void {
    
    if(this.dataLogin.username=="admin" && this.dataLogin.password=="12345"){
      this.authSvc.login(this.dataLogin.username,this.dataLogin.password)
    }else{
      alert("Usuario no registrado, Ingrese por favor con el usuario admin")  
    }
  }
  ngOnInit():void{

  }

}

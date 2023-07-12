import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import {
  DataUser,
  DefaultUser,
} from 'src/app/modules/shared/models/user.interface';
import { UserService } from 'src/app/modules/shared/services/User/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent  {
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  users: DataUser[] = [];

  data$: Observable<DataUser[]>;
  userSelected: DataUser = DefaultUser;
  userSelectedIndex: number = 0;
  isAdding = false;

  showUserForm = false;

  constructor(private user: UserService) {
    this.data$ = this.user.getEvent;
    this.data$.pipe().subscribe((res) => {
      this.users = res;
    });
  }

  goToEditUser(user: DataUser, i: number): void {
    this.showUserForm = true;
    this.userSelected = user;
    this.userSelectedIndex = i;
    this.isAdding = false;
  }
  goToAddUser(): void { 
    this.showUserForm = true;
    this.isAdding = true;
  }
  
  updateUser(event: DataUser): void {
    if (!this.isAdding) {
      this.users[this.userSelectedIndex] = event;
      this.showUserForm = false;
    } else {
      this.users.push(event);
      this.showUserForm = false;
    }
    this.userSelected = DefaultUser;
    this.user.setEvent = this.users;
  }
  deleteUserSelected(user: DataUser):void{
    if (confirm('¿Estas seguro que quiere eliminar este usuario?')) {
      this.user.deleteUser(user);
    }
  }
  cancelAction(){
    this.userSelected = DefaultUser;
    this.showUserForm = false;

  }
}

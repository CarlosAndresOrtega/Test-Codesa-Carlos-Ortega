import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable, first } from 'rxjs';
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
export class UserListComponent {
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  list: DataUser[] = [];

  data$: Observable<DataUser[]>;
  userSelected: DataUser = DefaultUser;
  userSelectedIndex: number = 0;
  isAdding = false;

  showUserForm = false;

  constructor(private user: UserService) {
    this.data$ = this.user.getEvent;
    this.data$.pipe().subscribe((res) => {
      this.list = res;
    });
  }

  goToEditUser(item: DataUser, i: number): void {
    this.showUserForm = true;
    this.userSelected = item;
    this.userSelectedIndex = i;
    this.isAdding = false;
  }
  goToAddUser(): void { 
    this.showUserForm = true;
    this.isAdding = true;
  }
  
  updateUser(event: DataUser): void {
    if (!this.isAdding) {
      this.list[this.userSelectedIndex] = event;
      this.showUserForm = false;
    } else {
      this.list.push(event);
      this.showUserForm = false;
    }
    this.userSelected = DefaultUser;
    this.user.setEvent = this.list;
  }
  deleteUserSelected(item: DataUser):void{
    this.user.deleteUser(item);
  }
}

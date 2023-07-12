import { Injectable } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { DataUser } from '../../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users:DataUser[] = [
    {
      name: 'Oliva',
      email: 'caortegayate@gmail.com',
      phone: '3206807037',
      direction: 'Cr 42 c # 56 c 83',
    },
    {
      name: 'Andres',
      email: 'Andres@gmail.com',
      phone: '3206807045',
      direction: 'Cr 42 c # 56 c 83',
    },
    {
      name: 'Herman',
      email: 'herman.ortega@gmail.com',
      phone: '3206807022',
      direction: 'Cr 42 c # 56 c 83',
    },
  ];
  private dataUsers$ = new BehaviorSubject<DataUser[]>(this.users);

  constructor() {}

  get getEvent() {
    return this.dataUsers$.asObservable();
  }
  set setEvent(data: DataUser[]) {
    this.users = data;
    this.dataUsers$.next(this.users);
  }

  deleteUser(deleteUser: DataUser): void {
    const updatedUsers = this.users.filter((user) => user !== deleteUser);
    this.setEvent = updatedUsers;
  }
}

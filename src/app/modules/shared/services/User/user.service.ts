import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { DataUser } from '../../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  list = [
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
      name: 'Herman ',
      email: 'herman.ortega@gmail.com',
      phone: '3206807022',
      direction: 'Cr 42 c # 56 c 83',
    },
  ];
  private dataUsers$ = new BehaviorSubject<DataUser[]>(this.list);

  constructor() {}

  get getEvent() {
    return this.dataUsers$.asObservable();
  }
  set setEvent(db: DataUser[]) {
    this.dataUsers$.next(db);
  }

  deleteUser(deleteUser: DataUser): void {
    this.dataUsers$
      .pipe(
        map((users) => {
          const userEncontrado = users.filter((user) => user !== deleteUser);
          return userEncontrado;
        })
      )
      .subscribe((result) => {
        this.setEvent = result;
      });
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUsers } from './users.interface';
declare var require: any;
const userUrl = require('../../assets/data.json');

@Injectable()
export class UsersService {
  constructor() {
    this.getUsers().subscribe();
  }

  getUsers(): Observable<IUsers[]> {
    return of(userUrl);
  }
}

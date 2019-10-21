import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor() {}

  login() {}

  register(user) {
    console.log('user', user);
    // add to local storage
    // return this.router.navigate(['/login']);
    return user;
  }
}

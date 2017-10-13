import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from '../models/user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  currentUser: User = null;

  constructor(private _http: Http) { }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('current_user'));
  }

  createUser(newUser: User, callback) {
    return this._http.post('/users', newUser).subscribe(
      res => {
        const user = res.json();
        if (!user.errors) {
          localStorage.setItem('current_user', JSON.stringify(user));
        } else {
          this.currentUser = null;
        }
        callback(user);
      },
      err => console.log(err)
    );
  }

  logout(callback) {
    return this._http.delete('/users').subscribe(
      res => {
        this.currentUser = null;
        callback(res.json());
      },
      err => console.error(err)
    );
  }

  session(callback) {
    console.log('');
  }

  authenticate(loginUser: User, callback) {
    return this._http.post('/users/login', loginUser).subscribe(
      res => {
        const user = res.json();
        if (!user.errors) {
          localStorage.setItem('current_user', JSON.stringify(user));
        } else {
          this.currentUser = null;
        }
        callback(user);
      },
      err => console.log(err)
    );
  }

}

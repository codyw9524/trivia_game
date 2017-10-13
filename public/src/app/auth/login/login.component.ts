import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser: User = new User();
  errors: string[] = [];

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    // this.newUser.email = 'cody@cody.com';
    // this.newUser.password = 'pass';
    // this.onSubmit();
  }

  onSubmit() {
    this.errors = [];
    this._userService.authenticate(this.newUser, (user) => {
      if (user.errors) {
        for (const key of Object.keys(user.errors)) {
          const error = user.errors[key];
          this.errors.push(error.message);
        }
      } else {
        this.newUser = new User();
        this._router.navigateByUrl('/trivia');
      }
    });
  }

}

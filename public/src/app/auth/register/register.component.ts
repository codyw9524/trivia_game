import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: User = new User();
  errors: string[] = [];

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.errors = [];
    this._userService.createUser(this.newUser, (user) => {
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

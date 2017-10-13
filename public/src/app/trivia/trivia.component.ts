import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  currentUser: User = null;

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.validateSession();
  }

  getCurrentUser(): void {
    this.currentUser = this._userService.getCurrentUser();
  }

  validateSession(): void {
    if (!this.currentUser) {
      this._router.navigateByUrl('/');
    }
  }

  logout(): void {
    this._userService.logout((res) => {
      this.currentUser = null;
      this._router.navigateByUrl('/');
    });
  }

}

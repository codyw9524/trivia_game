import { Router } from '@angular/router';
import { ApiRequest } from './../apirequest';
import { Category } from './../category';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-dashboard',
  templateUrl: './api-dashboard.component.html',
  styleUrls: ['./api-dashboard.component.css']
})
export class ApiDashboardComponent implements OnInit {

  categories: Category[];
  APIRequest = new ApiRequest ();

  constructor(
    private _apiService: ApiService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this._apiService.getCategories((res) => this.categories = res.trivia_categories);
  }

  onSubmit() {
    const category_ids = [];
    this.categories.forEach((category) => category_ids.push(category.id));
    this._apiService.getQuestionsFromAPI(this.APIRequest, category_ids, () => {
      this._router.navigateByUrl('/lets_play');
    });
  }

}

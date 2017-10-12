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
    private _apiService: ApiService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this._apiService.getCategories((res) => this.categories = res.trivia_categories);
  }

  onSubmit() {
    
  }

}

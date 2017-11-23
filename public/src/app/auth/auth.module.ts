// Modules
import { AuthRoutingModule } from './auth-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

// Components
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Services

@NgModule({
    declarations: [
      LoginComponent,
      RegisterComponent,
      AuthComponent
    ],
    imports: [
      NgbModule,
      CommonModule,
      FormsModule,
      HttpModule,
      AuthRoutingModule
    ],
    providers: [],
  })
  export class AuthModule { }

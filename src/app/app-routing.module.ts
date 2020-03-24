import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FresherComponent } from './register/fresher/fresher.component';
import { ProfessionalComponent } from './register/professional/professional.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'' , component : LoginComponent},
  {path:'register' , component : RegisterComponent},
  {path:'fresher', component : FresherComponent},
  {path:'professional', component : ProfessionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

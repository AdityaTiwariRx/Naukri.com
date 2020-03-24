import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FresherComponent } from './register/fresher/fresher.component';
import { ProfessionalComponent } from './register/professional/professional.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent,RegisterComponent,FresherComponent,ProfessionalComponent],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

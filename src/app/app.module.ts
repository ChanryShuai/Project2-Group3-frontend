import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//import { LoginComponent } from './components/login/login.component';
import { SuperheroComponent } from './components/superhero/superhero.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ShowdownComponent } from './components/showdown/showdown/showdown.component';

@NgModule({
  declarations: [
    AppComponent,
   // LoginComponent,
    NavbarComponent,
    SuperheroComponent,
    RegistrationComponent,
    HomeComponent,
    ShowdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

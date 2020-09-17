import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SuperheroComponent } from './components/superhero/superhero.component';
import { HomeComponent } from './home/home.component';
//import { LogoutService } from './services/logout/logout.service';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  // {
  //   path:'login',
  //   component:LoginComponent
  // },
  // {
  //   path:'logout',
  //   component:LoginComponent
  // },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'superhero',
    component:SuperheroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

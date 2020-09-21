import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/models/user/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedInUser: User;
  isLoggedIn = false;
  notLoggedIn = true; 
  link: string;

  private url:string  = "http://localhost:8080/project2/login";

  constructor(private httpClient:HttpClient,
    private router: Router) { }

  reload(link: string) {
      this.router.navigate(['/'], { skipLocationChange: true }).then(() => { this.router.navigate([link]); });
    }
  
  validate(username:string, password:string){
    let body: any =
    {
      username: username,
      password: password
    };
    return this.httpClient.post<User>(this.url+"/validate",body);
  }

  logout() {
    this.isLoggedIn = false;
    this.reload('home');
  }
}
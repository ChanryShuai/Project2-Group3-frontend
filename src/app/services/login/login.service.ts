import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/models/user/user';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  loggedInUser: User;
  isLoggedIn = false;
  notLoggedIn = true; 
  link: string;

  private url:string  = "http://localhost:8080/login";

  constructor(private httpClient:HttpClient,
    private router: Router) { }

  reload(link: string) {
      this.router.navigate(['/'], { skipLocationChange: true }).then(() => { this.router.navigate([link]); });
    }
  
  validate(username:string, password:string){
    return this.httpClient.post(this.url+"/validate", {username, password},{responseType:"text",observe:"response"});
  }

  logout() {
    this.isLoggedIn = false;
    this.reload('home');
  }
}
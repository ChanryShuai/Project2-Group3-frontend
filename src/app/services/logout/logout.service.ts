import { Injectable } from '@angular/core';
import { AuthTokenService } from '../cache/authToken/auth-token.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CurUserService } from '../cache/curUser/cur-user.service';
import { User } from 'src/app/models/user/user';

@Injectable()
export class LogoutService {

    private url:string = "http://localhost:4200/logout";

    constructor(
        private httpClient:HttpClient,
        private router:Router, 
        private authService:AuthTokenService,
        private curUser:CurUserService
    ) { }

    bye(){
        console.log("Hope you had a great showdown!!");
        let tUrl = this.authService.appendToken(this.url);
        console.log(tUrl.toString());
        this.httpClient.post(tUrl,{});
        this.curUser.setUser(new User());
        this.authService.setToken(null);//reset token to nothing
        this.router.navigate(['login']);
    }

}
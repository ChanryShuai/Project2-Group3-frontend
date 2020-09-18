import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user';
import { CacheService } from '../cache/cache.service';
import { AuthTokenService } from '../cache/authToken/auth-token.service';

@Injectable()
export class LogoutService {

    //private url:string = "http://localhost:4200/logout";

    constructor(
        private httpClient:HttpClient,
        private router:Router, 
        private curUser:CacheService,
        private authService:AuthTokenService,
    ) { }

    cleanUser(){
        console.log("Hope you had a great showdown!!");
        //  let tUrl = this.authService.appendToken(this.url);
        // // console.log(tUrl.toString());
        // this.httpClient.post(tUrl,{});
        // this.curUser.setUser(new User());
        // this.authService.setToken(null);//reset token to nothing
        // this.router.navigate(['home']);
        localStorage.clear();
        window.location.reload();
    }

}
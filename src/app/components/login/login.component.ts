import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { LoginService } from '../../services/login/login.service';
import { User } from 'src/app/models/user/user';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/services/cache/cache.service';
//import { RegisterComponent } from '../register/register.component';
// import { CurUserService } from '../../services/cache/curUser/cur-user.service';
// import { AuthTokenService } from '../../services/cache/authToken/auth-token.service';
// import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    login_username: string;
    login_password: string;

    constructor(private loginService:LoginService, 
        private router:Router,
        private currentUser:CacheService){}

    ngOnInit() {
    }

    // error(message:string){
    //     this.alertService.error(message);
    // }
    
    validate():void {
        console.log('validating user: ' + this.login_username);
        this.loginService.validate(this.login_username,this.login_password).subscribe(
            resp=>{ 
                let respJSON = JSON.parse(resp.body);
                if(resp.status == 200){
                    //user successfully logged in
                    //storing data in cache obserable
                    let newUser = new User();
                    newUser.userId = respJSON["user_id"];
                    newUser.firstName = respJSON["first_name"];
                    newUser.lastName = respJSON["last_name"];
                    //newUser.$profilePicture = respJSON["profilePicture"];
                    newUser.username = respJSON["username"];
                    newUser.password = respJSON["userpass"];
                    newUser.userWins = respJSON["user_wins"];
                    newUser.userLosses = respJSON["user_losses"];
                    newUser.userRecord = respJSON["user_record"];
                    this.currentUser.setUser(newUser);
                    //this.authService.setToken(respJSON["token"]);
                }
                // redirect them to app-home
                this.router.navigate(["game"]);
            },
            () =>{
                console.log("Wrong credentials.");
            }
        );
    }

    // register(){
    //     const modalRef = this.regModal.open(RegisterComponent);
    //     console.log("Registering new user");
    // }

    // forgotPW(){
    //     this.router.navigate(["forgot-password"]);
    // }

}
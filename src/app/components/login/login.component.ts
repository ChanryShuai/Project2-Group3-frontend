import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_username: string;
  login_password: string;

  constructor(private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  validate() {
    if (this.login_username == null || this.login_password == null) {
      alert('please enter your username and password.');
    } else {
      console.log('validating user: ' + this.login_username);
      this.loginService.validate(this.login_username, this.login_password).subscribe(
        (user) => {
          this.loginService.loggedInUser = user;
          console.log(user);
          console.log(this.loginService.loggedInUser)
          if (user != null) {
            this.loginService.isLoggedIn = true;
            this.loginService.notLoggedIn = false;
            this.router.navigate(["/game"]);
          } else {
            alert("Invalid credentials. Please try again!")
          }
        }
      );
    }
  }

  register() {
    this.router.navigate(['/register']);
    console.log("Registering new user");
  }
}

// validate():void {
    //     console.log('validating user: ' + this.login_username);
    //     this.loginService.validate(this.login_username,this.login_password).subscribe(
    //         resp=>{ 
    //             let respJSON = JSON.parse(resp.body);
    //             if(resp.status == 200){
    //                 //user successfully logged in
    //                 //storing data in cache obserable
    //                 let newUser = new User();
    //                 newUser.userId = respJSON["user_id"];
    //                 newUser.firstName = respJSON["first_name"];
    //                 newUser.lastName = respJSON["last_name"];
    //                 //newUser.$profilePicture = respJSON["profilePicture"];
    //                 newUser.username = respJSON["username"];
    //                 newUser.password = respJSON["userpass"];
    //                 newUser.userWins = respJSON["user_wins"];
    //                 newUser.userLosses = respJSON["user_losses"];
    //                 newUser.userRecord = respJSON["user_record"];
    //                 this.currentUser.setUser(newUser);
    //                 //this.authService.setToken(respJSON["token"]);
    //             }
    //             // redirect them to app-home
    //             this.router.navigate(["game"]);
    //         },
    //         () =>{
    //             console.log("Wrong credentials.");
    //         }
    //     );
    // }
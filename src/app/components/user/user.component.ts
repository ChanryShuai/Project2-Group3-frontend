import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private ls: LoginService, private us: UserService, private router: Router) { }

  username: string;
  password: string;
  first: string;
  last: string;
  userId: number;
  showUpdate: string = "false";
  user: User = this.ls.loggedInUser;
  avurl: string = "https://api.adorable.io/avatars/";

  users: User[];

  ngOnInit(): void {
  }

  show() {
    this.showUpdate = "yes";
    this.update();
  }

  update() {

    let u = new User(0, this.username, this.password, this.first, this.last, 0, 0, 0);
    u.userId = this.user.userId;
    u.userWins = this.user.userWins;
    u.userLosses = this.user.userLosses;
    u.userRecord = this.user.userRecord;
    this.us.updateUser(u).subscribe(
      (response: User) => {
        u = response;
        this.us.getUserById(this.ls.loggedInUser.userId).subscribe(
          (data) => {
            this.user = data;
          }
        ); return this.user;
      }
    )
  }
}

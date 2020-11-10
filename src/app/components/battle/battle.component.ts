import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle } from 'src/app/models/battle/battle';
import { User } from 'src/app/models/user/user';
import { BattleService } from 'src/app/services/battle/battle.service';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  constructor(private us: UserService, private bs: BattleService, private ls: LoginService,
    private router: Router) { }

  username: string
  userBattles: Array<Battle>
  allUserRecords: Array<User>
  avurl: string = "https://api.adorable.io/avatars/";


  ngOnInit(): void {
  }

  getOneUserRecord() {
    if (this.ls.isLoggedIn == true) {
      this.username = this.ls.loggedInUser.username
      this.us.getUserByUsername(this.username).subscribe(
        (data) => {
          this.allUserRecords = [data];
        }
      )
    } else {
      alert("Sorry, you are not logged in yet!")
      this.router.navigate(['/login'])
    }
  }

  getUserRecords(): any {
    if (this.ls.isLoggedIn == true) {
      this.us.getAllUsers().subscribe(
        (data) => {
          this.allUserRecords = data;
          return this.allUserRecords;
        }
      ); () => {
        console.log("Error loading all user records...");
        return null;
      }
    } else {
      alert("Sorry, you must be logged in to view all user records!")
      this.router.navigate(['/login'])
    }
  }


  getUserBattles(username: string) {
    if (username == this.ls.loggedInUser.username) {
      this.us.getUserByUsername(username).subscribe(
        (data) => {
          this.allUserRecords = [data];
        }
      )
      this.bs.getUserBattles(username).subscribe(
        (data) => {
          this.userBattles = data;
          return this.userBattles
        }
      )
    } else {
      alert("Sorry, you can not view this user's past battles")
    }
  }

}

        // for (let user of allUsers) {    
        //   //console.log(user);
        //   let userRecord: Array<any> = [0, "null", "null", 0];
        //   userRecord[0] = user.userId;
        //   userRecord[1] = user.first;
        //   userRecord[2] = user.last;
        //   userRecord[3] = user.userRecord;
        // //console.log(userRecord);
        // this.userRecords.push([userRecord])
        // } 
       // console.log(userRecords)
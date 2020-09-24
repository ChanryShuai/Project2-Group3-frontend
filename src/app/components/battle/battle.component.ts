import { Component, OnInit } from '@angular/core';
import { Battle } from 'src/app/models/battle/battle';
import { User } from 'src/app/models/user/user';
import { BattleService } from 'src/app/services/battle/battle.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  constructor(private us:UserService, private bs:BattleService) { }

  username:string
  //userBattles:Array<Battle>
  userRecords:Array<any>

  ngOnInit(): void {
  }

  // getOneUserBattle(username:string){
  //   this.bs.getUserBattles(username).subscribe(
  //     (data)=>{
  //       this.userBattles=data;
  //       return this.userBattles
  //     }
  //   )
  // }

  getOneUserRecord(username:string){
    this.us.getUserByUsername(this.username).subscribe(
      (data)=>{
        this.userRecords=[data];
      }
      )
    }

  getUserRecords(){
    this.userRecords=this.bs.getAllUserRecords() 
    return this.userRecords;
  }
}

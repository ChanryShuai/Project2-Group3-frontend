import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Battle } from 'src/app/models/battle/battle';
import { BattleDTO } from 'src/app/models/battleDTO/battle-dto';
import { User } from 'src/app/models/user/user';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor(private http: HttpClient, private userService: UserService) { }

  //gets one battle from DB using the battleId
  getOneBattleById(battleId: number): Observable<Battle[]> {
    return this.http.get<Battle[]>('http://localhost:8080/project2/battle/' + battleId);
  }

  //addBattle return void 
  addBattle(battle: BattleDTO): Observable<Battle> {
    let body: BattleDTO = battle;
    return this.http.post<Battle>(('http://localhost:8080/project2/battle/add'), body);
  }

  //gets all a user's battles from DB using the username
  getUserBattles(username: string): Observable<Battle[]> {
    return this.http.get<Battle[]>('http://localhost:8080/project2/battle/' + username);
  }
}
  //get All user records
  // getAllUserRecords(): any {
  //   this.userService.getAllUsers().subscribe(
  //     (data) => {
  //       let allUsers: Array<User> = data;
  //       //console.log(allUsers);
  //       let userRecords: Array<Array<any>> =[[]];
  //      // let userRecord: Array<any> = [0, "null", "null", 0];
  //       for (let user of allUsers) {    
  //         //console.log(user);
  //         let userRecord: Array<any> = [0, "null", "null", 0];
  //         userRecord[0] = user.userId;
  //         userRecord[1] = user.first;
  //         userRecord[2] = user.last;
  //         userRecord[3] = user.userRecord;
  //       //console.log(userRecord);
  //       userRecords.push([userRecord])
  //       } 
  //       console.log(userRecords)
  //       return userRecords;
  //     }
  //   ); () => { console.log("Error loading all user records...");
  // return null; }
  //   }
  // }   

// //get One user record		
// getOneUserRecord(userId:number){		
//   let u:User = this.userService.getUserById(userId)[Symbol.iterator]();		
//   let userRecord: Array<any> = [0, "null", 0];		
//     userRecord[0] = u.userId;		
//     userRecord[1] = u.username;		
//     userRecord[2] = u.userRecord;		

//  }



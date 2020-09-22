import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Battle } from 'src/app/models/battle/battle';
import { User } from 'src/app/models/user/user';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor(private http:HttpClient, private userService:UserService) { }

  //gets one battle from DB using the battleId
  getOneBattleById(battleId:number): Observable<Battle[]>{
    return this.http.get<Battle[]>('http://localhost:8080/project2/battle'+battleId);
  }

  //gets all a user's battles from DB using the username
  getUserBattles(username:string): Observable<Battle[]>{
    return this.http.get<Battle[]>('http://localhost:8080/project2/battle'+username);
  }

  //addBattle return void 
  addBattle(battle : Battle): void{
    this.http.post<Battle>(('http://localhost:8080/project2/battle'), battle);
  }

 //get All user records		
 getAllUserRecords(){		
  let allUsers = this.userService.getAllUsers();		
  let userRecords:Array<Array<any>> ;		

   for (let user of allUsers[Symbol.iterator]()){		   
    var userRecord:Array<any> = [0, "null", 0];		   
    userRecord[0] = user.userId;		     
    userRecord[1] = user.username;		
    userRecord[2] = user.userRecord;		

   } userRecords.push(userRecord);		
}
//get One user record		
getOneUserRecord(userId:number){		
  let u:User = this.userService.getUserById(userId)[Symbol.iterator]();		
  let userRecord: Array<any> = [0, "null", 0];		
    userRecord[0] = u.userId;		
    userRecord[1] = u.username;		
    userRecord[2] = u.userRecord;		

 }
}

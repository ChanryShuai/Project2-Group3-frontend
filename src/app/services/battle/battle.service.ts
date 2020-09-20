import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Battle } from 'src/app/models/battle/battle';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor(private http:HttpClient) { }

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
    this.http.post('http://localhost:8080/project2/battle', battle);
  }
 
}

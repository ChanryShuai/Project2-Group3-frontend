import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Battle } from 'src/app/models/battle/battle';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor(private http:HttpClient) { }

  //gets one battle from DB
  getOneBattle(battleId:number): Observable<Battle>{
    return this.http.get<Battle>('http://localhost:8080/project2/battle'+battleId);
  }

  //gets all battles from DB for a user
  getBattleByUserId(userId:number): Observable<Battle[]>{
    return this.http.get<Battle[]>('http://localhost:8080/project2/battle'+userId);
  }

  //getOneUserRecord(userId:number): Observable

 
}

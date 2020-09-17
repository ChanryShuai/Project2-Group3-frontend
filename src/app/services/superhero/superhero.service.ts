import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Superhero } from 'src/app/models/superhero/superhero';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  constructor(private http:HttpClient) { }
  getOneHeroFromApi(id:number):Observable<Superhero>{
    return this.http.get("https://www.superheroapi.com/api.php/2746669182324854/" +id+"/") as Observable<Superhero>
  }

  getFiveHeros():Observable<Superhero[]>{
    let random5:Array<number>;
    for(let i = 0; i<5; i++) {
      random5.push(Math.floor(Math.random()* 731)+1)
  }
    let hero5:Array<Superhero[]>;
    for(let j=0; j<5; j++){
      let Superhero = this.getOneHeroFromApi(random5[j])
      hero5.push(Superhero)
    }
    return hero5 as Observable<Superhero[]>
}
}

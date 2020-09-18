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

  //getting random opponent
  getRandomHeroFromApi():Observable<Superhero>{
    let opponentId = (Math.random() * 731)+1
    return this.http.get("https://www.superheroapi.com/api.php/2746669182324854/" +opponentId+"/") as Observable<Superhero>
  }

  //building array of 5 superheroes to select from
  getFiveHeros(){
    let randomArray = Array.from({length: 5}, () => Math.floor(Math.random() * 731)+1);
    var hero5 =[];
    for(let j=0; j<5; j++){
      let Superhero = this.getOneHeroFromApi(randomArray[j])
      hero5.push(Superhero)
    }
    return hero5;
  }

    //saving one hero to DB
    saveHero(h:Superhero){
      this.http.post<Superhero>('http://localhost:8080/project2/superhero', h);
    }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Superhero } from 'src/app/models/superhero/superhero';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  sup:Superhero;
  hero5:Array<Superhero>;

  constructor(private http:HttpClient) { }

  getOneHeroFromApi(id:number):Observable<Superhero>{
    return this.http.get("https://www.superheroapi.com/api.php/2746669182324854/" +id+"/") as Observable<Superhero>
  }

  //getting random opponent
  getRandomHeroFromApi(): Superhero {
    let opponentId = Math.floor(Math.random() * 731)+1;
    this.http.get("https://www.superheroapi.com/api.php/2746669182324854/" +opponentId+"/").subscribe(
      (data)=> {
       this.sup = data;
      }
    );
    if(this.sup.powerStats.intelligence == null||this.sup.powerStats.strength == null||
      this.sup.powerStats.speed == null||this.sup.powerStats.durability == null||
      this.sup.powerStats.power == null||this.sup.powerStats.combat == null){
        this.getRandomHeroFromApi();
      } return this.sup;
    
  }

  //building an array of 5 superheroes
  getFiveHeros():Superhero[] { 
    this.hero5 = [this.getRandomHeroFromApi()];
    for(let j=0; j<4; j++){
      this.sup = this.getRandomHeroFromApi()
          
          this.hero5.push(this.sup);
        
      }return this.hero5;
  }
  

    //saving one hero to DB
    saveHeroDB(h:Superhero){
      this.http.post<Superhero>('http://localhost:8080/project2/superhero', h);
    }

    //getting one hero to DB
    getOneHeroFromDB(id:number):Observable<Superhero>{
      return this.http.get<Superhero>('http://localhost:8080/project2/superhero/'+id)
    }


}
  // //building an array of 5 superheroes
  // getFiveHeros():Superhero[] { 
  //   this.getRandomHeroFromApi().subscribe(
  //         (data)=>{
  //           this.hero5 = [data];
  //         } 
  //       ); 
  //   for(let j=0; j<4; j++){
  //     this.getRandomHeroFromApi().subscribe(
  //       (data)=>{
  //         this.sup = data;
  //         this.hero5.push(this.sup);
  //       } 
  //     );
  //     }return this.hero5;
  // }
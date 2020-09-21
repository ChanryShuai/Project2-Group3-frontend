import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Superhero } from 'src/app/models/superhero/superhero';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  sup:Superhero;
  hero5:Array<any>;

  constructor(private http:HttpClient) { }

  getOneHeroFromApi(id:number):Observable<Superhero>{
    return this.http.get("https://www.superheroapi.com/api.php/2746669182324854/" +id+"/") as Observable<Superhero>
  }

  //getting random opponent
  getRandomHeroFromApi():Observable<Superhero>{
    let opponentId = Math.floor(Math.random() * 731)+1;
    return this.http.get("https://www.superheroapi.com/api.php/2746669182324854/" +opponentId+"/") as Observable<Superhero>
  }

  //building an array of 5 superheroes
  getFiveHeros():Superhero[] { 
    this.getRandomHeroFromApi().subscribe(
          (data)=>{
            this.hero5 = [data];
          } 
        ); 
    for(let j=0; j<4; j++){
      this.getRandomHeroFromApi().subscribe(
        (data)=>{
          this.sup = data;
          this.hero5.push(this.sup);
        } 
      );
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
  // getFiveHeros():Array<Superhero>{
  //   let randomArray = Array.from({length: 5}, () => Math.floor(Math.random() * 731)+1);
  //   //console.log(randomArray)
    
  //  this.getRandomHeroFromApi().subscribe(
  //    (data)=>{
  //     this.sup = data;
  //     console.log(this.sup);
  //     this.hero5= [this.sup]; 
  //     console.log(this.hero5)
  //    }
  //  ); 
  //     this.hero5= [this.sup]; 
  //     console.log(this.hero5)
  //       for(let j of randomArray){
  //         this.getOneHeroFromApi(j).subscribe(
  //         (data)=>{
  //           this.sup = data;
  //           console.log(this.sup)
  //           hero5.push(this.sup)},
  //         )
  //         console.log(hero5);
  //       return hero5;
        
  //     }
  //   } 
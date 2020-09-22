import { Component, OnInit } from '@angular/core';
import { Superhero } from 'src/app/models/superhero/superhero';
import { SuperheroService } from 'src/app/services/superhero/superhero.service';


@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {

  heroId:number;
  superhero:Superhero;

  superheroes:Superhero[]

  //for storing the hero retreived from Api
  hero:Superhero;
  villain:Superhero;

  //for retrieving the avatar and opponent from DB after backend services
  avatar:Superhero
  opponent:Superhero;

  constructor(private ss:SuperheroService) { }

  ngOnInit(): void {
  }

  getRandomHerofromApi():void{
    this.villain = this.ss.getRandomHeroFromApi()
      this.ss.saveHeroDB(this.villain);
    
  }

getHeroFromApi(heroId:number):void{
  this.ss.getOneHeroFromApi(heroId).subscribe(
    (data)=>{
      this.superheroes=[data];
      //console.log(this.superheroes);
    },()=>{
      this.superheroes = null;
      console.log("error retrieving superhero from API")
    }
  )
  }

  getHeroList():Array<Superhero>{
    return this.superheroes = this.ss.getFiveHeros()
      }
    

  // saveHero():void{
  //   this.ss.saveHero(hero)
  // }
}
// getRandomHerofromApi():void{
//   this.ss.getRandomHeroFromApi().subscribe(
//   (data)=>{
//     this.villain=data;
//     this.ss.saveHeroDB(this.villain);
//   },
//   //error retrieving data
//   () =>{
//     this.opponent = null;
//     console.log("error retrieving superhero from API");
//   }
//   )
// }
import { Component, OnInit } from '@angular/core';
import { Superhero } from 'src/app/models/superhero/superhero';
import { SuperheroService } from 'src/app/services/superhero/superhero.service';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {

  //for storing the hero retreived from Api
  hero:Superhero;
  villain:Superhero;

  //for retrieving the avatar and opponent from DB after backend services
  avatar:Superhero
  opponent:Superhero;

  heroIdApi:number;
  heroIdDB:number;

  constructor(private ss:SuperheroService) { }

  ngOnInit(): void {
  }

  getRandomHerofromApi():void{
    this.ss.getRandomHeroFromApi().subscribe(
    (data)=>{
      this.villain=data;
      this.ss.saveHeroDB(this.villain);
    },
    //error retrieving data
    () =>{
      this.hero = null;
      console.log("something went wrong");
    }
    )
  }

  saveHero():void{
    this.ss.saveHero(hero)
  }
}

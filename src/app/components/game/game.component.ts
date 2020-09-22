import { Component, OnInit } from '@angular/core';
import { Superhero } from 'src/app/models/superhero/superhero';
import { SuperheroService } from 'src/app/services/superhero/superhero.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  superheroes: Superhero[];
  //avatarId:number = parseInt(document.getElementById("avatarId").nodeValue);
  avatar: Superhero;

  constructor(private ss: SuperheroService) { }

  ngOnInit(): void {
  }

  gameInit() {
    return this.superheroes = this.ss.getFiveHeros();
  }

  selectHero(): Superhero[] {
    this.superheroes= [this.avatar];
    //this.superheroes = [this.avatar];
    // console.log([this.avatar]) 
    console.log(this.avatar);
    this.ss.getOneHeroFromApi(this.avatar.id).subscribe(
      (data) => {
        this.superheroes = [data]
      })
    return this.superheroes;

  }
  // this.ss.getOneHeroFromApi(this.avatarId).subscribe(

  //   (data) => {

  //     this.superheroes = [data];
  //   }, () => {
  //     this.superheroes = null;
  //     console.log("error retrieving superhero from API")
  //   }
  //   );return this.superheroes;
}

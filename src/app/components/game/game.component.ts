import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle } from 'src/app/models/battle/battle';
import { BattleDTO } from 'src/app/models/battleDTO/battle-dto';
import { Superhero } from 'src/app/models/superhero/superhero';
import { Powerstats } from 'src/app/models//powerstats/powerstats';
import { BattleService } from 'src/app/services/battle/battle.service';
import { SuperheroService } from 'src/app/services/superhero/superhero.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  superheroes: Superhero[];
 // avatarId:number = parseInt(document.getElementById("avatarId").nodeValue);
  avatar: Superhero;
  //let avatarname = document.getElementById("avatarname");
  villain: Superhero;
  outcome: string; 
  userId:number;
  avarPower:Powerstats;

  constructor(private ss: SuperheroService, private bs:BattleService, private router:Router) { }

  ngOnInit(): void {
  }

  gameInit() {
    return this.superheroes = this.ss.getFiveHeros();
  }

  selectHero(id:number): Superhero[] {
    // let avatarname = document.getElementById("avatarname").toString();
     console.log(id);
    this.ss.getOneHeroFromApi(id).subscribe(
      (data) => {
        this.avatar = data
       // console.log(this.avatar)
        this.superheroes = [this.avatar];
        //console.log(this.superheroes);
      })
    this.ss.getRandomHeroFromApi().subscribe(
      (data)=>{
        this.villain = data;
      }
    )
    return [this.avatar];
   
  }

  average(hero:Superhero):number{
  let p:Powerstats = hero.powerstats;
  console.log(p);
  let average:number = (p.intelligence+p.strength+p.speed+p.durability+p.power+p.combat)/6;
  console.log(average);
  return average;
  }

  fight(superhero:Superhero[], villain:Superhero): string {
    //this.avarPower = this.avatar.powerStats;
   
    let sup = superhero[0];
    let supA = this.average(sup);
    let villainA = this.average(villain);
    // console.log(sup);
    // console.log(supA);
    // console.log(villainA);
    //console.log(villain.powerStats.intelligence);
    if (supA >= villainA) {
      this.outcome = "win";
      // alert("YOU HAVE WON!")
      // this.router.navigate(['/battle']);
    } else {
      this.outcome = "loss";
      // alert("You lost!")
      // this.router.navigate(['/battle']);
    }console.log(this.outcome); 
    return this.outcome;
  }

  buildBattle():void{
    let battleDTO = new BattleDTO(this.outcome, this.avatar.name, this.villain.name, this.userId);
    this.bs.addBattle(battleDTO);
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

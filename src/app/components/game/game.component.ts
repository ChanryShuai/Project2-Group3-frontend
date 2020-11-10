import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle } from 'src/app/models/battle/battle';
import { BattleDTO } from 'src/app/models/battleDTO/battle-dto';
import { Superhero } from 'src/app/models/superhero/superhero';
import { Powerstats } from 'src/app/models//powerstats/powerstats';
import { BattleService } from 'src/app/services/battle/battle.service';
import { SuperheroService } from 'src/app/services/superhero/superhero.service';
import { LoginComponent } from '../login/login.component';
import { LoginService } from 'src/app/services/login/login.service';

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
  userId: number;
  avarPower: Powerstats;

  constructor(private ss: SuperheroService, private bs: BattleService, private router: Router, private ls: LoginService) { }

  ngOnInit(): void {
  }

  gameInit() {
    if (this.ls.isLoggedIn == true) {
      //console.log(this.ls.loggedInUser)
      return this.superheroes = this.ss.getFiveHeros();
    } else {
      alert("Please login or register to play our game!")
      this.router.navigate(['/login']);
    }
  }

  selectHero(id: number): Superhero[] {
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
      (data) => {
        this.villain = data;
      }
    )
    window.scroll(0,0);
    return [this.avatar];

  }

  average(hero: Superhero): number {
    let p: Powerstats = hero.powerstats;
    console.log(p);
    let average: number = (p.intelligence + p.strength + p.speed + p.durability + p.power + p.combat) / 6;
    console.log(average);
    return average;
  }

  fight(superhero: Superhero[], villain: Superhero): string {
    let sup = superhero[0];
    let supA = this.average(sup);
    let villainA = this.average(villain);
    if (supA >= villainA) {
      this.outcome = "win";
      alert("YOU HAVE WON!")
      let id:number = this.ls.loggedInUser.userId;
      console.log(id);
      let b = new BattleDTO(this.outcome, this.avatar.name, this.villain.name, id);
      b.userId = id
      this.bs.addBattle(b).subscribe(
        (response:Battle)=>{
          let b1 = response;
        }
      );
    } else {
      this.outcome = "loss";
      alert("You lost!")
      // this.router.navigate(['/battle']);
      let id:number = this.ls.loggedInUser.userId;
      console.log(id);
      let b = new BattleDTO(this.outcome, this.avatar.name, this.villain.name, id);
      b.userId = id
      this.bs.addBattle(b).subscribe(
        (response:Battle)=>{
          let b1 = response;
        }
      );
    } console.log(this.outcome);
    this.gameInit();
    window.scroll(0,0);
    return this.outcome;
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

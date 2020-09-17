import { Component, OnInit } from '@angular/core';
import { Superhero } from 'src/app/models/superhero/superhero';
import { SuperheroService } from 'src/app/services/superhero/superhero.service';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {

  public superhero:Superhero = null;
  public input:number = 0

  constructor(private ss:SuperheroService) { }

  ngOnInit(): void {
  }

  getHero():void{
    this.ss.getHeroFromApi(this.input).subscribe(
    (data)=>{
      this.superhero=data;
    },
    //error retrieving data
    () =>{
      this.superhero = null;
      console.log("something went wrong");
    }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { SuperheroService } from 'src/app/services/superhero/superhero.service';

@Component({
  selector: 'app-showdown',
  templateUrl: './showdown.component.html',
  styleUrls: ['./showdown.component.css']
})
export class ShowdownComponent implements OnInit {

  constructor(private ss:SuperheroService) { }

  ngOnInit(): void {
  }

  goodFunc(){
    
  }

}

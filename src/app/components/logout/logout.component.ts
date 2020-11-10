import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private ls:LoginService, private router:Router) { }

  check:boolean = this.ls.isLoggedIn;

  ngOnInit(): void {
  }
  
  logout(){
    alert("Logging out...")
    this.ls.logout();
    this.router.navigate(['/home']);
  }
  
  game(){
  this.router.navigate(['/game']);
  }
}

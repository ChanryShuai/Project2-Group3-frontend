import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private ls:LoginService) { }

  check:Boolean = false;

  avurl:string = "https://api.adorable.io/avatars/";
  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login']);
  }
  
  register(){
    this.router.navigate(['/register']);
  }
}

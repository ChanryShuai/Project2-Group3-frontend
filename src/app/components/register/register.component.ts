import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string;
  password:string;
  fName:string;
  lName:string;
  userId:number;

  users: User[];

  constructor(private us: UserService) { }

  ngOnInit(): void {
  }

  //getting new registered user from DB
  getUsers(){
    this.us.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      }
    )
  }
  
    register(){
     let u = new User(0,this.username,this.password,this.fName,this.lName, 0,0,0,);
      this.us.addUser(u).subscribe(
        (response:User)=>{
          u = response;
        }
      )
    }
  
  }

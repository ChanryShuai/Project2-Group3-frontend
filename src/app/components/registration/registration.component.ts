import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newUser:User;
  UserId:number;

  constructor(private us: UserService) { }

  ngOnInit(): void {
  }

  //getting new registered user from DB
getUser(){
  this.us.getUserById().subscribe(
    (response: User) => {
      this.user = response;
    }
  )
}

  register(){
    let u = new User()
  }

}

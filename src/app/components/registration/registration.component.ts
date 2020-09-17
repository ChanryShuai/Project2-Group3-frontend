import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { RegistrationService } from 'src/app/services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newUser:string;
  UserId:number;

  constructor(private rs: RegistrationService) { }

  ngOnInit(): void {
  }

getUser(){
  this.rs.addUser().subscribe(
    (response: User) => {
      this.user = response;
    }
  )
}

  register(){
    let u = new User()
  }

}

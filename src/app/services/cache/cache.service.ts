import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

    private curUser = new BehaviorSubject(new User());
    private observeCurUser = this.curUser.asObservable();

    //sets the variable to be observed
    setUser(newUser:User){
        this.curUser.next(newUser);
    }

    getStaticUser(){
        return this.curUser.getValue();
    }
    
    //use this to subscribe to the user object
    getUser(){
        return this.observeCurUser;
    }
}

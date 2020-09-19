import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(u:User):Observable<User>{
    let body: User = u;
    return this.http.post<User>('http://localhost:8080/project2/register', body);
  }

  getUserById(userId:number){
    return this.http.get<User>('http://localhost:8080/project2/user'+userId);
  }

  getUserByUsername(username:string){
    return this.http.get<User>('http://localhost:8080/project2/user'+username);
  }
  
  updateUser(u:User):Observable<User>{
    let body: User = u;
    return this.http.post<User>('http://localhost:8080/project2/user', body);
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/project2/user');
  }

  getAllUserRecords(){
    let allUsers = this.getAllUsers();
   
    let userRecords:Array<Array<any>> ;

    for (let user of allUsers[Symbol.iterator]()){
      var userRecord:Array<any> = [0, "null", 0];
      userRecord[0] = user.userId;
      userRecord[1] = user.username;
      userRecord[2] = user.userRecord;
     
    } userRecords.push(userRecord);
    
  }
    

  }

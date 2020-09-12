export class User {

    id:number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    userWins: number;
    userLosses: number;
    userRecord: number;

    constructor(id:number, username:string, password:string, firstName:string, lastName:string, userWins:number, userLosses:number, userRecord:number){
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName=firstName;
        this.lastName = lastName;
        this.userWins = userWins;
        this.userLosses = userLosses;
        this.userRecord = userRecord;
    }
}

export class User {

    userId:number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    userWins: number;
    userLosses: number;
    userRecord: number;

    constructor(userId:number,username:string, password:string, firstName:string, lastName:string, userWins:number, userLosses:number, userRecord:number){
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userWins = userWins;
        this.userLosses = userLosses;
        this.userRecord = userRecord;
    }
    
}

export class User {

    userId:number;
    username: string;
    password: string;
    first: string;
    last: string;
    userWins: number;
    userLosses: number;
    userRecord: number;

    constructor(userId:number,username:string, password:string, first:string, last:string, userWins:number, userLosses:number, userRecord:number){
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.first = first;
        this.last = last;
        this.userWins = userWins;
        this.userLosses = userLosses;
        this.userRecord = userRecord;
    }
    
}

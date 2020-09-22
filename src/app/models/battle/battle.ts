import { Superhero } from '../superhero/superhero';

export class Battle {
    
    battleId: number;
    outcomes: string;
    avatar: string;
    opponent: string;
    // avatarId: Superhero;
    // opponentId: Superhero;

    constructor(
        battleId:number,
        outcomes:string,
        avatar:string,
        opponent:string) { 
        this.battleId=battleId;
        this.outcomes=outcomes;
        this.avatar=avatar;
        this.opponent=opponent;
       // this.powerStats = powerStats;
    }

}

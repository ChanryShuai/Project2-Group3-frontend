export class BattleDTO {

    outcomes: string;
    avatar: string;
    opponent: string;

    constructor(outcomes:string,
        avatar:string,
        opponent:string) { 

        this.outcomes=outcomes;
        this.avatar=avatar;
        this.opponent=opponent;
       // this.powerStats = powerStats;
    }
}

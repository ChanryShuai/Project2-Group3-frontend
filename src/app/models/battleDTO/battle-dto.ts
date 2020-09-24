export class BattleDTO {

    outcomes: string;
    avatar: string;
    opponent: string;
    userId: number;

    constructor(outcomes: string,
        avatar: string,
        opponent: string, userId: number) {

        this.outcomes = outcomes;
        this.avatar = avatar;
        this.opponent = opponent;
        this.userId = this.userId
    }
}

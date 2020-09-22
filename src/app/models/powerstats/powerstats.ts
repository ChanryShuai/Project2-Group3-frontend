export class Powerstats {

        intelligence:number;
        strength:number;
        speed:number;
        durability:number;
        power:number;
        combat:number;
        average:number

        constructor(intelligence: number,
                strength: number,
                speed: number,
                durability: number,
                power: number,
                combat: number) { 
        
                this.intelligence = intelligence;
                this.strength = strength;
                this.speed = speed;
                this.durability = durability;
                this.power=power;
                this.combat=combat;
                this.average = (intelligence+strength+speed+durability+power+combat)/6;
               // this.powerStats = powerStats;
            }
}

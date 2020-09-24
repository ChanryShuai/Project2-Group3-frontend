import { Powerstats } from '../powerstats/powerstats';

export class Superhero {

    id: number;
    image: object;
    name: string;
    alignment: string;
    occupation: string;
    affiliation: string;
    
    // intelligence: number;
    // strength: number;
    // speed: number;
    // durability: number;
    // power: number;
    // combat: number;
    // average: number;
    powerStats: Powerstats;

    constructor(id: number, image: object, name: string, alignment: string, occupation: string, affiliation: string, powerStats:Powerstats) {
        this.id = id;
        this.name = name;
        this.alignment = alignment;
        this.occupation = occupation;
        this.affiliation = affiliation;
        this.powerStats = powerStats;
    }
}



// intelligence: number,
// strength: number,
// speed: number,
// durability: number,
// power: number,
// combat: number


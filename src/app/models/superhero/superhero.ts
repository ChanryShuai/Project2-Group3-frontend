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
    powerstats: Powerstats;

    constructor(id: number, image: object, name: string, alignment: string, occupation: string, affiliation: string, powerstats:Powerstats) {
        this.id = id;
        this.name = name;
        this.alignment = alignment;
        this.occupation = occupation;
        this.affiliation = affiliation;
        this.powerstats = powerstats;
    }
}



// intelligence: number,
// strength: number,
// speed: number,
// durability: number,
// power: number,
// combat: number


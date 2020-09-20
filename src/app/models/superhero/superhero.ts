import { Powerstats } from '../powerstats/powerstats';

export class Superhero {

    id:number;
    image: object;
    name:string;
    fullName: string;
    poBirth: string;
    alignment: string;
    occupation: string;
    affiliation: string;
    powerStats: Powerstats;

    
    constructor(id:number,image:object, name:string, fullName:string, poBirth:string, alignment:string, occupation:string, affiliation:string, powerStats:Powerstats){
        this.id = id; 
        this.name = name;
        this.fullName = fullName;
        this.poBirth = poBirth;
        this.alignment = alignment;
        this.occupation = occupation;
        this.affiliation = affiliation;
        this.powerStats = powerStats;
    }
}






import { NumberValueAccessor } from '@angular/forms';
import { kStringMaxLength } from 'buffer';

export class Superhero {

    id:number;
    image: object;
    name:string;
    fullName: string;
    poBirth: string;
    alignment: string;
    occupation: string;
    affiliation: string;
    powerStats: PowerStats;
}

export enum PowerStats{
    intelligence,
    strength,
    speed,
    durability,
    pwoer,
    combat,
    average
}

import { NumberValueAccessor } from '@angular/forms';
import { kStringMaxLength } from 'buffer';

export class Superhero {

    id:number;
    name:string;
    powerStats: PowerStats;
    alignment: string;
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

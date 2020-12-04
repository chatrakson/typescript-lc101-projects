import { Astronaut } from './Astronaut';
import { Payload } from './Payload';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let tempNum: number = 0;
        for (let everyItems of items) { // why is 'of' work and 'in' give you a string
            tempNum += everyItems.massKg;
        }

        // for (let everyItems in items) {
        //     tempNum += items[everyItems].massKg;
        // }
        return tempNum;
    }

    currentMassKg(): number {
        let totalMass: number = 0;
        return totalMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
    }
};
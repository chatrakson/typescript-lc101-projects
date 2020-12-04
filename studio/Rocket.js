"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var tempNum = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) { // why is 'of' work and 'in' give you a string
            var everyItems = items_1[_i];
            tempNum += everyItems.massKg;
        }
        // for (let everyItems in items) {
        //     tempNum += items[everyItems].massKg;
        // }
        return tempNum;
    };
    Rocket.prototype.currentMassKg = function () {
        var totalMass = 0;
        return totalMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
;

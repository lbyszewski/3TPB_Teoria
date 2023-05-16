"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");
class Dog extends Animal_1.Animal {
    constructor(age, country) {
        super();
        this.age = age;
        this.country = country;
    }
    prepareAge(age) {
        this.age = age;
    }
    sayHello() {
        console.log("Dog have a: " + this.age + " " + this.country);
    }
}
exports.Dog = Dog;

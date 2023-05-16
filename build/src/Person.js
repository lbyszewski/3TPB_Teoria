"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    sayHello() {
        console.log("hi my " + this.firstName + " " + this.lastName);
    }
}
exports.Person = Person;

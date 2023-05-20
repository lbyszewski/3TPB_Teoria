"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_js_1 = require("./Dog.js");
const Person_js_1 = require("./Person.js");
let person = new Person_js_1.Person("Lukasz", "Byszewski");
person.sayHello();
let animal = new Dog_js_1.Dog(10, "Polska");
animal.sayHello();

import {Dog} from "./Dog.js"
import { Person } from "./Person.js";
import { Ulamek } from "./Ulamek.js";

let person = new Person("Lukasz", "Byszewski");
person.sayHello();
let animal = new Dog(10,"Polska");
animal.sayHello();

let ulamek = new Ulamek(4,3);
let ulamek2 = new Ulamek(4,3);
ulamek.dodaj(ulamek2);
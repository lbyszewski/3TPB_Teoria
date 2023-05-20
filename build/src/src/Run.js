"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = require("./Dog");
const Test_1 = require("./Test");
let produkt = new Test_1.Produkt("Banany", 30);
produkt.sayValueAndPrice();
let burek = new Dog_1.Dog(13, "Polska");
burek.sayHello();

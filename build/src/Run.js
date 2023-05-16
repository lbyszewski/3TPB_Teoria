"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
const Ulamek_1 = require("./Ulamek");
let test = new Test_1.Test(1, 4);
test.show();
let ulamek = new Ulamek_1.Ulamek(4, 3);
let ulamek2 = new Ulamek_1.Ulamek(4, 3);
ulamek.dodaj(ulamek2);

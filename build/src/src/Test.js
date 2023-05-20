"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produkt = void 0;
class Produkt {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get cena() {
        return this._cena;
    }
    set cena(value) {
        this._cena = value;
    }
    constructor(n, c) {
        this._name = n;
        this._cena = c;
    }
    sayValueAndPrice() {
        console.log("nazwa to : " + this.name + this.cena);
    }
}
exports.Produkt = Produkt;

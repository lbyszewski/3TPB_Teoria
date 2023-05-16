"use strict";
exports.__esModule = true;
exports.Produkt = void 0;
var Produkt = /** @class */ (function () {
    function Produkt(n, c) {
        this.name = n;
        this.cena = c;
    }
    Produkt.prototype.sayValueAndPrice = function () {
        console.log("nazwa to : " + this.name + this.cena);
    };
    return Produkt;
}());
exports.Produkt = Produkt;

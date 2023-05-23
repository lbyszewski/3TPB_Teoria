"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Trapez = void 0;
var Figura_1 = require("./Figura");
var Trapez = /** @class */ (function (_super) {
    __extends(Trapez, _super);
    function Trapez() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trapez.prototype.setBokA = function (a) {
        this.bokA = a;
    };
    Trapez.prototype.getBokA = function () {
        return this.bokA;
    };
    Trapez.prototype.setBokB = function (a) {
        this.bokB = a;
    };
    Trapez.prototype.getBokB = function () {
        return this.bokB;
    };
    Trapez.prototype.setBokH = function (a) {
        this.bokH = a;
    };
    Trapez.prototype.getBokH = function () {
        return this.bokH;
    };
    Trapez.prototype.oblicz = function () {
        var result = ((this.getBokA() + this.getBokB()) * this.getBokH()) / 2;
        return result;
    };
    Trapez.prototype.pokaz = function () {
        console.log("pole traapezu wynosi: " + this.oblicz());
    };
    return Trapez;
}(Figura_1.Figura));
exports.Trapez = Trapez;

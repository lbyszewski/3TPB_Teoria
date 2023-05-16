"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
class Test {
    constructor(fV, lV) {
        this.firstValue = fV;
        this.lastValue = lV;
    }
    addTwoNumber() {
        let result = this.firstValue + this.lastValue;
        return result;
    }
    show() {
        console.log("podaj wynik: " + this.addTwoNumber());
    }
}
exports.Test = Test;

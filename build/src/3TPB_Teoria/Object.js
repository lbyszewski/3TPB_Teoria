"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Something = void 0;
class Something {
    get gFirstValue() {
        return this._firstValue;
    }
    set sFirstValue(value) {
        this._firstValue = value;
    }
    get gSecondValue() {
        return this._secondValue;
    }
    set sSecondValue(value) {
        this._secondValue = value;
    }
    get gThirdValue() {
        return this._thirdValue;
    }
    set sThirdValue(value) {
        this._thirdValue = value;
    }
    constructor(firstValue, secondValue, thirdValue) {
        this._firstValue = firstValue;
        this._secondValue = secondValue;
        this._thirdValue = thirdValue;
    }
    // metoda zwracana 
    doSomthingWithValues() {
        let result = this.gFirstValue * this.gSecondValue * this.gThirdValue;
        return result;
    }
    // metoda niezwracana
    showResult() {
        console.log(this.doSomthingWithValues());
    }
}
exports.Something = Something;

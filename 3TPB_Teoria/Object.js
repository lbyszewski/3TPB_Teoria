"use strict";
exports.__esModule = true;
exports.Something = void 0;
var Something = /** @class */ (function () {
    function Something(firstValue, secondValue, thirdValue) {
        this._firstValue = firstValue;
        this._secondValue = secondValue;
        this._thirdValue = thirdValue;
    }
    Object.defineProperty(Something.prototype, "gFirstValue", {
        get: function () {
            return this._firstValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Something.prototype, "sFirstValue", {
        set: function (value) {
            this._firstValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Something.prototype, "gSecondValue", {
        get: function () {
            return this._secondValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Something.prototype, "sSecondValue", {
        set: function (value) {
            this._secondValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Something.prototype, "gThirdValue", {
        get: function () {
            return this._thirdValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Something.prototype, "sThirdValue", {
        set: function (value) {
            this._thirdValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Something.prototype.doSomthingWithValues = function () {
        var result = this.gFirstValue * this.gSecondValue * this.gThirdValue;
        return result;
    };
    Something.prototype.showResult = function () {
        console.log(this.doSomthingWithValues());
    };
    return Something;
}());
exports.Something = Something;

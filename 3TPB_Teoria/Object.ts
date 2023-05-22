export class Something {

    // property  pierwszej wartości
    private _firstValue: number;

    public getFirstValue(): number {
        return this._firstValue;
    }
    public setFirstValue(value: number) {
        this._firstValue = value;
    }
    // property  drugiej wartości
    private _secondValue: number;

    public getSecondValue(): number {
        return this._secondValue;
    }
    public setSecondValue(value: number) {
        this._secondValue = value;
    }
    // property  trzeciej wartości
    private _thirdValue: number;


    public getThirdValue(): number {
        return this._thirdValue;
    }
    public setThirdValue(value: number) {
        this._thirdValue = value;
    }

    constructor(firstValue: number,secondValue: number, thirdValue: number) {
        this._firstValue = firstValue
        this._secondValue = secondValue
        this._thirdValue = thirdValue
    }


    // metoda zwracana 
    public doSomthingWithValues(): number {
       let result =  this.getFirstValue() * this.getSecondValue() * this.getThirdValue();
       return result;
    }

    // metoda niezwracana
    public showResult():void {
        console.log(this.doSomthingWithValues());
    }

}
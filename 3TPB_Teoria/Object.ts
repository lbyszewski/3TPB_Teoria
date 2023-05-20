export class Something {

    // property  pierwszej wartości
    private _firstValue: number;

    public get gFirstValue(): number {
        return this._firstValue;
    }
    public set sFirstValue(value: number) {
        this._firstValue = value;
    }
    // property  drugiej wartości
    private _secondValue: number;

    public get gSecondValue(): number {
        return this._secondValue;
    }
    public set sSecondValue(value: number) {
        this._secondValue = value;
    }
    // property  trzeciej wartości
    private _thirdValue: number;


    public get gThirdValue(): number {
        return this._thirdValue;
    }
    public set sThirdValue(value: number) {
        this._thirdValue = value;
    }

    constructor(firstValue: number,secondValue: number, thirdValue: number) {
        this._firstValue = firstValue
        this._secondValue = secondValue
        this._thirdValue = thirdValue
    }


    // metoda zwracana 
    public doSomthingWithValues(): number {
       let result =  this.gFirstValue * this.gSecondValue * this.gThirdValue;
       return result;
    }

    // metoda niezwracana
    public showResult():void {
        console.log(this.doSomthingWithValues());
    }

}
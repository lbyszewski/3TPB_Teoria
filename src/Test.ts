export class Produkt {
    private _name: String;

    public get name(): String {
        return this._name;
    }
    
    public set name(value: String) {
        this._name = value;
    }
    private _cena: number;

    public get cena(): number {
        return this._cena;
    }
    public set cena(value: number) {
        this._cena = value;
    }

    constructor(n: String , c: number){
        this._name = n;
        this._cena = c;
    }



    sayValueAndPrice(): void {
        console.log("nazwa to : " + this.name + this.cena);
    }

}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ulamek = void 0;
class Ulamek {
    constructor(l, m) {
        this.licznik = l;
        this.mianownik = m;
    }
    get l() {
        return this.licznik;
    }
    get m() {
        return this.mianownik;
    }
    set licz(l) {
        this.licznik = l;
    }
    set mian(m) {
        this.mianownik = m;
    }
    dodaj(tenDoDodania) {
        let ulamekSpr = this.doWspolengo(this, tenDoDodania);
        this.licznik = ulamekSpr[0].licznik + ulamekSpr[1].licznik;
        this.mianownik = ulamekSpr[0].mianownik;
    }
    odejmij(tenDoOdjecia) {
        let ulamekSpr = this.doWspolengo(this, tenDoOdjecia);
        this.licznik = ulamekSpr[0].licznik - ulamekSpr[1].licznik;
        this.mianownik = ulamekSpr[0].mianownik;
    }
    wypisz() {
        console.log("podana wartość to: " + this.l + "/" + this.m);
    }
    wypiszOdejmowanie() {
        console.log("podana wartość to: " + this.l + "/" + this.m);
    }
    doWspolengo(first, last) {
        let nowyLicznik = first.licznik * last.mianownik;
        let nowyLicznikDrugiego = last.mianownik * first.licznik;
        let nowyMianownik = first.mianownik * last.mianownik;
        let sprJeden = new Ulamek(nowyLicznik, nowyMianownik);
        let sprDwa = new Ulamek(nowyLicznikDrugiego, nowyMianownik);
        let ulamek = [sprJeden, sprDwa];
        return ulamek;
    }
}
exports.Ulamek = Ulamek;
const ulamek = new Ulamek(2, 4);
const ulamekDwa = new Ulamek(1, 4);
//ulamek.dodaj(ulamekDwa);
//ulamek.wypisz();
ulamek.odejmij(ulamekDwa);
ulamek.wypiszOdejmowanie();

package org.example.Hermetyzacja;

import lombok.Data;

@Data
public class Fraction {
    private  double licznik;
    private  double mianownik;


    public Fraction(double licznik, double mianownik) {
        this.licznik = licznik;
        this.mianownik = mianownik;
    }


    public void dodaje(Fraction tenDoDodania){
        Fraction [] checkOne = doWspolnego(this, tenDoDodania);
        this.licznik = checkOne[0].licznik + checkOne[1].licznik;
        this.mianownik = checkOne[1].mianownik;
    }

    public void wyswietl(){
        System.out.println( this.licznik + "/" + this.mianownik);
    }

    private Fraction [] doWspolnego(Fraction first, Fraction last){
        double licznikP = first.getLicznik() * last.getMianownik();
        double licznikd = last.getLicznik() * first.getMianownik();
        double nowyMianownik = first.getMianownik() * last.getMianownik();


        Fraction newFractionOne = new Fraction(licznikP,nowyMianownik);
        Fraction newFractionTwo = new Fraction(licznikd,nowyMianownik);

        Fraction [] tablica = new Fraction[2];
        tablica[0] = newFractionOne;
        tablica[1] = newFractionTwo;

        return tablica;
    }
}

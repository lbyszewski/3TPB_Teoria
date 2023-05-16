package org.example.Hermetyzacja;

import lombok.Data;

@Data
public class Fraction {

    // Anotacja @Data służy do zapewnienia takich rzeczy jak : Getter , Setter , ToString , EqualAndHashCode, Constructors itp.
    // gettery i settery oraz wszystkie inne rzeczy można stworzyć na podstawie właściwości
    // poprzez naciśnięcie kombinacji klawiszy alt + insert
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
        double licznikD = last.getLicznik() * first.getMianownik();
        double nowyMianownik = first.getMianownik() * last.getMianownik();


        Fraction newFractionOne = new Fraction(licznikP,nowyMianownik);
        Fraction newFractionTwo = new Fraction(licznikD,nowyMianownik);

        Fraction [] tablica = new Fraction[2];
        tablica[0] = newFractionOne;
        tablica[1] = newFractionTwo;

        return tablica;
    }
}

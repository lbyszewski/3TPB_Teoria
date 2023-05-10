package org.example.Polimorfizm;

public class Square extends Retangle {

    @Override
    public double pole() {
        // getter - pobranie wartości z pola - hermetyzacja property
        double result = this.getA() * this.getA();
        return result;
    }

    @Override
    public double obwod() {
        double result = this.getA() * 4;
        return result;
    }

    @Override
    public void pokazPole() {
        System.out.println("pole kwadratu wynosi: " + " " + this.pole());
    }

    @Override
    public void pokazObwod() {
        System.out.println("obwod kwadratu wynosi: " + " " + this.obwod() );
    }
}

package org.example.Polimorfizm;

import lombok.Data;

@Data
public class Retangle extends Block{
    protected double a;
    private double b;

    @Override
    public double pole() {
       double result = a * b;
       return result;
    }

    @Override
    public double obwod() {
        double result = ((2*a) + (2*b));
        return result;
    }

    @Override
    public void pokazPole() {
        System.out.println("pole wyonsi: " + this.pole());
    }

    @Override
    public void pokazObwod() {
        System.out.println("obowd wynosi: " + this.obwod());
    }
}

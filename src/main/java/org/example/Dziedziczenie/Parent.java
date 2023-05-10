package org.example.Dziedziczenie;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.example.Agregacja.Person;

// Dziedziczenie property i methods do klast Child
@Data
@AllArgsConstructor
public class Parent {

    private Person person;
    private  double a;
    private  double b;
    public double addTwoNumber(){
        double r = a * b;
        return r;
    }

}

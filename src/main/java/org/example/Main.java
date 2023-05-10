package org.example;


import org.example.Agregacja.BanAccount;
import org.example.Agregacja.Person;
import org.example.Dziedziczenie.Child;
import org.example.Dziedziczenie.Parent;
import org.example.Hermetyzacja.Fraction;

import org.example.Interface.CrudClassImplement;
import org.example.Polimorfizm.Retangle;
import org.example.Polimorfizm.Square;


public class Main {

    public static void main(String[] args) {
        // refrencja  nazwa własna = nowy obiekt - proces Agregacji
        Person personOne = new Person("Adam", "Kowalski", 35);
        BanAccount bankAccount = new BanAccount(personOne);
        System.out.println(bankAccount.getOwner().getFirstName() + " " + bankAccount.getOwner().getLastName());

        // Ulamek - Hermetyzacja metod
        Fraction fractionOne = new Fraction(2,3);
        Fraction fractionTwo = new Fraction(2,3);
        fractionOne.dodaje(fractionTwo);
        fractionOne.wyswietl();

        // Polimorfizm - wielopostaciowość
        Retangle prostokat = new Retangle();
        // setter - ustawienie pola - hermetyzacja property
        prostokat.setA(5.3);
        prostokat.setB(5.4);
        prostokat.pokazPole();
        prostokat.pokazObwod();

        CrudClassImplement crudClassImplement = new CrudClassImplement();
        System.out.println(crudClassImplement.Fibb(5));
        System.out.println(crudClassImplement.Silnia(5));

        Square square = new Square();
        square.setA(5);
        square.pokazPole();
        square.pokazObwod();

        // Dziedziczenie
        Parent parent = new Parent(personOne,4,5);
        parent.addTwoNumber();
        Child child = new Child(personOne, 4, 6);
        child.addTwoNumber();
    }
}
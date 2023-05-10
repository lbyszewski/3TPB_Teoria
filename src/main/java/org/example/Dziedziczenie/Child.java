package org.example.Dziedziczenie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.example.Agregacja.Person;

import javax.management.ConstructorParameters;


public class Child extends Parent{

    public Child(Person person, double a, double b) {
        super(person, a, b);
    }
}

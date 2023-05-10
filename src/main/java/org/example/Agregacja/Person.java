package org.example.Agregacja;

import lombok.Data;

@Data
public class Person {

    private String firstName;
    private String lastName;
    private int myAge;
    public String test;

    public Person(String firstName, String lastName, int myAge) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.myAge = myAge;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getMyAge() {
        return myAge;
    }

    public void setMyAge(int myAge) {
        this.myAge = myAge;
    }
}

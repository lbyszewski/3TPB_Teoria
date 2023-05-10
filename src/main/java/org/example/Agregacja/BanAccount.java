package org.example.Agregacja;

import lombok.Data;

@Data
public class BanAccount {
    private Person owner;

    public BanAccount(Person owner) {
        this.owner = owner;
    }
}

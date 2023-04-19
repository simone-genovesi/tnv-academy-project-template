package com.thenetvalue.finalproject.model.exceptions;

public class UsersNotFoundException extends Exception {
    public UsersNotFoundException(){
        super("Nessun user trovato");
    }
}
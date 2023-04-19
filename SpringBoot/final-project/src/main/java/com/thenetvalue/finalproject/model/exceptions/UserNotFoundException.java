package com.thenetvalue.finalproject.model.exceptions;

public class UserNotFoundException extends Exception {

    public UserNotFoundException(int id){
        super("User con id %d non è stato trovato".formatted(id));
    }

    public UserNotFoundException(String username){
        super("User con username %s non è stato trovato".formatted(username));
    }
}

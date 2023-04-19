package com.thenetvalue.finalproject.model.exceptions;

public class UserAlreadyExistsException extends Exception {
    public UserAlreadyExistsException(String username) {
        super("Esiste già un utente con username: %s".formatted(username));
    }
}

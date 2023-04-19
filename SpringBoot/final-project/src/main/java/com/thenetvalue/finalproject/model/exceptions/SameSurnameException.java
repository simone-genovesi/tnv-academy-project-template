package com.thenetvalue.finalproject.model.exceptions;

public class SameSurnameException extends Exception {
    public SameSurnameException() {
        super("Hai inserito lo stesso cognome");
    }
}
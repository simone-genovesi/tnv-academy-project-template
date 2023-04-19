package com.thenetvalue.finalproject.model.exceptions;

public class SameUsernameException extends Exception {
    public SameUsernameException() {
        super("Hai inserito lo stesso username");
    }
}

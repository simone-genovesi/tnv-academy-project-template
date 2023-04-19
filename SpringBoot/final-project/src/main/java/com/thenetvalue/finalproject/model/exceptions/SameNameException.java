package com.thenetvalue.finalproject.model.exceptions;

public class SameNameException extends Exception {
    public SameNameException() {
        super("Hai inserito lo stesso nome");
    }
}
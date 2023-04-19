package com.thenetvalue.finalproject.model.exceptions;

public class SamePasswordException extends Exception {
    public SamePasswordException() {
        super("Hai inserito la stessa password");
    }
}
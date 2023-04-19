package com.thenetvalue.finalproject.model.exceptions;

public class WrongPasswordLoginException extends Exception {
    public WrongPasswordLoginException(String password) {
        super("Password errata. La password inserita è %s".formatted(password));
    }
}
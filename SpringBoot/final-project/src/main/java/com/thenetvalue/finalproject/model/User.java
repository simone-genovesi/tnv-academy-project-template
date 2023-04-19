package com.thenetvalue.finalproject.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = {"username"})})
public class User {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String surname;
    private String username;
    private String password;
}

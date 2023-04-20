package com.thenetvalue.finalproject.controller;

import com.thenetvalue.finalproject.model.Credentials;
import com.thenetvalue.finalproject.model.User;
import com.thenetvalue.finalproject.model.exceptions.*;
import com.thenetvalue.finalproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    //CRUD Operations

    //add User
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(userService.registerUser(user));
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(e.getMessage());
        }
    }

    //get One User by Id
    @GetMapping("/{userId}")
    public ResponseEntity<?> getUser(@PathVariable int userId) {
        try {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(userService.getUser(userId));
        } catch (UserNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        }
    }

    //get All Users
    @GetMapping("/")
    public ResponseEntity<?> getAllUsers() {
        try {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(userService.getAllUsers());
        } catch (UsersNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        }
    }

    //update One User by Id
    @PutMapping("/update/{userId}")
    public ResponseEntity<?> updateUser(@PathVariable int userId, @RequestBody User user) {
        try {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(userService.updateUser(userId, user));
        } catch (UserNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        } catch (SameUsernameException | SameNameException
                 | SameSurnameException | SamePasswordException ex) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(ex.getMessage());
        }
    }
    //delete One User by Id
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable int userId) {
        try {
            return ResponseEntity
                    .status(HttpStatus.NO_CONTENT)
                    .body(userService.deleteUser(userId));
        } catch (UserNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        }
    }

    @GetMapping("findbyusername/{username}")
    public ResponseEntity<?> findUserByUsername(@PathVariable String username) {
        try {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(userService.findUserByUsername(username));
        } catch (UserNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        }
    }

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Credentials credentials) {
        try {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(userService.loginUser(credentials));
        } catch (UserNotFoundException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        } catch (WrongPasswordLoginException ex) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(ex.getMessage());
        }
    }
}

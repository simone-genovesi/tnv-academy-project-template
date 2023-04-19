package com.thenetvalue.finalproject.service;

import com.thenetvalue.finalproject.dao.UserRepositoryDAO;
import com.thenetvalue.finalproject.model.Credentials;
import com.thenetvalue.finalproject.model.User;
import com.thenetvalue.finalproject.model.exceptions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    final UserRepositoryDAO userDAO;

    @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO){
        this.userDAO = userDAO;
    }

    public User registerUser(User user)
            throws UserAlreadyExistsException {
        User existsUser = userDAO.findByUsernameEquals(user.getUsername());
        if (existsUser != null) throw new UserAlreadyExistsException(user.getUsername());
        return userDAO.save(user);
    }

    public User getUser(int userId)
            throws UserNotFoundException {
        User user = userDAO.findById(userId).orElse(null);

        if (user == null) throw new UserNotFoundException(userId);

        return user;
    }

    public List<User> getAllUsers()
            throws UsersNotFoundException {
        List<User> lista = (List<User>) userDAO.findAll();
        if (lista.isEmpty()) throw new UsersNotFoundException();

        return lista;
    }

    public User updateUser(int userId, User dataUser)
            throws UserNotFoundException, SameUsernameException,
            SameNameException, SameSurnameException, SamePasswordException {
        User user = userDAO.findById(userId).orElse(null);

        if (user == null) throw new UserNotFoundException(userId);
        if (user.getUsername().equals(dataUser.getUsername())) throw new SameUsernameException();
        if (user.getName().equals(dataUser.getName())) throw new SameNameException();
        if (user.getSurname().equals(dataUser.getSurname())) throw new SameSurnameException();
        if (user.getPassword().equals(dataUser.getPassword())) throw new SamePasswordException();

        user.setName(dataUser.getName());
        user.setSurname(dataUser.getSurname());
        user.setUsername(dataUser.getUsername());
        user.setPassword(dataUser.getPassword());

        return userDAO.save(user);
    }

    public User deleteUser(int userId)
            throws UserNotFoundException {
        User user = userDAO.findById(userId).orElse(null);
        if(user == null) throw new UserNotFoundException(userId);
        userDAO.delete(user);
        return user;
    }

    public User findUserByUsername(String username)
            throws UserNotFoundException {
        User user = userDAO.findByUsernameEquals(username);
        if (user == null) throw new UserNotFoundException(username);
        return user;
    }

    public String loginUser(Credentials credentials)
            throws UserNotFoundException, WrongPasswordLoginException {
        User user = userDAO.findByUsernameEquals(credentials.getUsername());
        if (user == null) throw new UserNotFoundException(credentials.getUsername());
        if (!credentials.getPassword().equals(user.getPassword()))
            throw new WrongPasswordLoginException(credentials.getPassword());
        return "Login effettuato";
    }
}

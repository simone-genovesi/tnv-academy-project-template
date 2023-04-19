package com.thenetvalue.finalproject.dao;

import com.thenetvalue.finalproject.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User, Integer> {
    User findByUsernameEquals(String username);
}

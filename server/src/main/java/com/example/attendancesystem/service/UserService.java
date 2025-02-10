package com.example.AttendanceSystem.service;

import com.example.AttendanceSystem.model.User;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class UserService {
    private List<User> users = new ArrayList<>(List.of(
    new User("admin", "password"),
    new User("user", "password")
));


    public User authenticate(String username, String password) {
        // return users.stream()
        //         .filter(user -> user.getUsername().equals(username) && user.getPassword().equals(password))
        //         .findFirst()
        //         .orElse(null);
       return new User("user", "pass");
    }
}

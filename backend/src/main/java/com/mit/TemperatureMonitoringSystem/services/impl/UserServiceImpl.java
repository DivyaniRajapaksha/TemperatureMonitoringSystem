package com.mit.TemperatureMonitoringSystem.services.impl;

import com.mit.TemperatureMonitoringSystem.modals.User;
import com.mit.TemperatureMonitoringSystem.repository.UserRepository;
import com.mit.TemperatureMonitoringSystem.services.UserService;
import com.mit.TemperatureMonitoringSystem.utils.Cryptography;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    Cryptography cryptography;
    User user;


    @Override
    public String signupUser(User user) {
        cryptography = Cryptography.getInstance();
        user.setPassword(cryptography.encode(user.getPassword()));
        repository.save(user);
        return "User signup successfully : " + user.getFirstName();
    }

    @Override
    public List<User> getUsers() {
        return repository.findAll();
    }

}

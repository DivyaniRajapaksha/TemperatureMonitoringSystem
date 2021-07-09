package com.mit.TemperatureMonitoringSystem.services;

import com.mit.TemperatureMonitoringSystem.modals.User;

import java.util.List;

public interface UserService {

    String signupUser(User user);
    List<User> getUsers();

    String userLogin(String id, String password);

}

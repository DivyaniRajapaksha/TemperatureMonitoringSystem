package com.mit.TemperatureMonitoringSystem.services;

import com.mit.TemperatureMonitoringSystem.modals.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    String signupUser(User user);
    List<User> getUsers();
    Optional<User> getUser(int id);
    String deleteUser(int id);

    String userLogin(String id, String password);

}

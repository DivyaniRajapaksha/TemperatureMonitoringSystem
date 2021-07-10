package com.mit.TemperatureMonitoringSystem.services.impl;

import com.mit.TemperatureMonitoringSystem.modals.User;
import com.mit.TemperatureMonitoringSystem.repository.UserRepository;
import com.mit.TemperatureMonitoringSystem.services.UserService;
import com.mit.TemperatureMonitoringSystem.utils.Cryptography;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    Cryptography cryptography;
    User user;
    List<String> stringList=new ArrayList<String>();


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

    @Override
    public String userLogin(String id, String password) {
        cryptography = Cryptography.getInstance();
        user =repository.userLogin(id);
        if(password.equals(cryptography.decode(user.getPassword()))){

            String userObj = "{\"userId\":\""+ user.getId() +"\"," +
                            "\"userFirstName\":\""+ user.getFirstName() +"\"," +
                            "\"userLastName\":\""+ user.getLastName() +"\"," +
                            "\"userEmail\":\""+ user.getEmail() +"\"," +
                            "\"msg\":\""+ "Login Successful!" +
                            "\"}";

            return userObj;
        }
        return "Not a valid user";
    }

    @Override
    public Optional<User> getUser(int id) {
        return repository.findById(id);
    }

    @Override
    public String deleteUser(int id) {
        repository.deleteById(id);
        return "User deleted successfully: id :" + id;
    }

    @Override
    public List<String> getAllEmails() {
        List<User> list=repository.findAll();
        for (User user: list) {
            System.out.println("Hi"+user.getEmail());
            stringList.add(user.getEmail());
        }
        return stringList;
    }

}

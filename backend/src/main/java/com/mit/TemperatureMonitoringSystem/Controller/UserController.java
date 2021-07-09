package com.mit.TemperatureMonitoringSystem.Controller;

import com.mit.TemperatureMonitoringSystem.Modal.User;
import com.mit.TemperatureMonitoringSystem.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(value = "/api")
public class UserController {


    @Autowired
    private UserRepository repository;

    @PostMapping("/signup")
    public String signupUser(@RequestBody User user){
    repository.save(user);
    return "User signup successfully : " + user.getFirstName();
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return  repository.findAll();
    }

    @GetMapping("/users/{id}")
    public Optional<User> getUser(@PathVariable int id){
        return repository.findById(id);
    }

    @DeleteMapping("/user/delete/{id}")
    public String deleteUser(@PathVariable int id){
        repository.deleteById(id);
        return "User deleted successfully: id :" + id;
    }

}

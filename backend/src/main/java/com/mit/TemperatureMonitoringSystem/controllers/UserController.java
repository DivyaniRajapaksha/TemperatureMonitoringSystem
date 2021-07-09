package com.mit.TemperatureMonitoringSystem.controllers;

import com.mit.TemperatureMonitoringSystem.modals.User;
import com.mit.TemperatureMonitoringSystem.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(value = "/api/user")
public class UserController {


    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signupUser(@RequestBody User user){ return userService.signupUser(user);}

    @GetMapping("/users")
    public List<User> getUsers(){ return userService.getUsers(); }

    @GetMapping(value = "/login/{id}/{password}")
    public String userLogin(@PathVariable String id, @PathVariable String password) {
        return userService.userLogin(id, password);
    }

    @GetMapping("/users/{id}")
    public Optional<User> getUser(@PathVariable int id){ return userService.getUser(id);}

    @DeleteMapping("/user/delete/{id}")
    public String deleteUser(@PathVariable int id){ return userService.deleteUser(id);}

}

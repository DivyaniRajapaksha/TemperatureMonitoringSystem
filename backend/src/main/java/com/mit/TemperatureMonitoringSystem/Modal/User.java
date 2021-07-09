package com.mit.TemperatureMonitoringSystem.Modal;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Random;

@Getter
@Setter
@ToString

@Document(collection = "User")
public class User {
    @Id
    private int id = new Random().nextInt(9999999 + 1)  + 10000000;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}


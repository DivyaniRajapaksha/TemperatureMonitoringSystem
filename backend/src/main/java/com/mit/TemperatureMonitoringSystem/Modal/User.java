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

}


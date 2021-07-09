package com.mit.TemperatureMonitoringSystem.controllers;

import com.mit.TemperatureMonitoringSystem.modals.Sensor;
<<<<<<< HEAD
import com.mit.TemperatureMonitoringSystem.modals.User;
import com.mit.TemperatureMonitoringSystem.services.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
=======
import com.mit.TemperatureMonitoringSystem.services.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
>>>>>>> b6d1b99cd5ebde8eb759771f912a2c5ed6ef65d3

@RestController
@RequestMapping(value = "/api/sensor")
@CrossOrigin

public class SensorController {
    @Autowired
    private SensorService sensorService;
<<<<<<< HEAD

    @PostMapping("/add")
    public String addSensor(@RequestBody Sensor sensor){ return sensorService.addSensor(sensor);}
=======

    @PostMapping("/add")
    public String addSensor(@RequestBody Sensor sensor){ return sensorService.addSensor(sensor);}

    @GetMapping("/sensors")
    public List<Sensor> getUsers(){ return sensorService.getSensors(); }
>>>>>>> b6d1b99cd5ebde8eb759771f912a2c5ed6ef65d3
}

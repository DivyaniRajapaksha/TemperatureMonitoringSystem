package com.mit.TemperatureMonitoringSystem.controllers;

import com.mit.TemperatureMonitoringSystem.modals.Sensor;
import com.mit.TemperatureMonitoringSystem.services.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/sensor")
@CrossOrigin

public class SensorController {
    @Autowired
    private SensorService sensorService;

    @PostMapping("/add")
    public String addSensor(@RequestBody Sensor sensor){ return sensorService.addSensor(sensor);}

    @GetMapping("/sensors")
    public List<Sensor> getUsers(){ return sensorService.getSensors(); }
}

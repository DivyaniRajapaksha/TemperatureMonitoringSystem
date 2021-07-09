package com.mit.TemperatureMonitoringSystem.controllers;

import com.mit.TemperatureMonitoringSystem.modals.Sensor;
import com.mit.TemperatureMonitoringSystem.modals.User;
import com.mit.TemperatureMonitoringSystem.services.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/sensor")

public class SensorController {
    @Autowired
    private SensorService sensorService;

    @PostMapping("/add")
    public String addSensor(@RequestBody Sensor sensor){ return sensorService.addSensor(sensor);}
}

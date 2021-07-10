package com.mit.TemperatureMonitoringSystem.controllers;

import com.mit.TemperatureMonitoringSystem.modals.Monitor;
import com.mit.TemperatureMonitoringSystem.services.MonitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/monitor")
@CrossOrigin
public class MonitorController {
    @Autowired
    private MonitorService monitorService;

    @PostMapping("/data")
    public void addSensor(@RequestBody Monitor monitor){
        monitor.setNotificationSent(false);
        monitorService.addData(monitor);
    }

    @GetMapping("/getData")
    public List<Monitor> getData(){ return monitorService.getData(); }

    @DeleteMapping("/delete/{id}")
    public String deleteData(@PathVariable int id){ return monitorService.deleteData(id);}

    @GetMapping("/sensorData/{id}")
    public List<Monitor> getSensorDetails(@PathVariable String id){ return monitorService.getData(id);}

    @GetMapping("/alertData")
    public List<Monitor> getNotifiedData(){ return monitorService.getNotifiedData();}


}

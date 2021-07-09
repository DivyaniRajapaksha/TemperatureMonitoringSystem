package com.mit.TemperatureMonitoringSystem.services.impl;

import com.mit.TemperatureMonitoringSystem.modals.Sensor;
import com.mit.TemperatureMonitoringSystem.repository.SensorRepository;
import com.mit.TemperatureMonitoringSystem.services.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SensorServiceImpl implements SensorService {
    @Autowired
    private SensorRepository repository;

    @Override
    public String addSensor(Sensor sensor) {
        repository.save(sensor);
        return "Sensor Added successfully : " + sensor.getSensorName();
    }
}

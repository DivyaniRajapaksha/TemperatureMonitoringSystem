package com.mit.TemperatureMonitoringSystem.services.impl;

import com.mit.TemperatureMonitoringSystem.modals.Sensor;
import com.mit.TemperatureMonitoringSystem.repository.SensorRepository;
import com.mit.TemperatureMonitoringSystem.services.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

<<<<<<< HEAD
=======
import java.util.List;

>>>>>>> b6d1b99cd5ebde8eb759771f912a2c5ed6ef65d3
@Service
public class SensorServiceImpl implements SensorService {
    @Autowired
    private SensorRepository repository;

    @Override
    public String addSensor(Sensor sensor) {
        repository.save(sensor);
        return "Sensor Added successfully : " + sensor.getSensorName();
    }
<<<<<<< HEAD
=======

    @Override
    public List<Sensor> getSensors() { return repository.findAll();}
>>>>>>> b6d1b99cd5ebde8eb759771f912a2c5ed6ef65d3
}

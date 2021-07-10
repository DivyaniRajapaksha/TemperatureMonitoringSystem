package com.mit.TemperatureMonitoringSystem.services;


import com.mit.TemperatureMonitoringSystem.modals.Sensor;

import java.util.List;

public interface SensorService {
    String addSensor(Sensor sensor);
    List<Sensor> getSensors();
}

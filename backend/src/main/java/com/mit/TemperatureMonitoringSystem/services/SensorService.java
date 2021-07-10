package com.mit.TemperatureMonitoringSystem.services;


import com.mit.TemperatureMonitoringSystem.modals.Sensor;

<<<<<<< HEAD
public interface SensorService {
    String addSensor(Sensor sensor);
=======
import java.util.List;

public interface SensorService {
    String addSensor(Sensor sensor);
    List<Sensor> getSensors();
>>>>>>> b6d1b99cd5ebde8eb759771f912a2c5ed6ef65d3
}

package com.mit.TemperatureMonitoringSystem.repository;

import com.mit.TemperatureMonitoringSystem.modals.Sensor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SensorRepository extends MongoRepository<Sensor, Integer> {
}

package com.mit.TemperatureMonitoringSystem.repository;

import com.mit.TemperatureMonitoringSystem.modals.Monitor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MonitorRepository extends MongoRepository<Monitor, Integer> {
}


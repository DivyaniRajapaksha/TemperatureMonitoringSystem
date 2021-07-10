package com.mit.TemperatureMonitoringSystem.repository;

import com.mit.TemperatureMonitoringSystem.modals.Monitor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface MonitorRepository extends MongoRepository<Monitor, Integer> {
    @Query(value="{ 'sensor_id' : ?0 }")
    List<Monitor> getSensorData(String id);

    //Get Logged User Details
    @Query(value="{ 'notificationSent' : ?0 }")
    List<Monitor> getLoggedUserDetails(boolean value);
}


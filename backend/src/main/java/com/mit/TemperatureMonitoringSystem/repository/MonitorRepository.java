package com.mit.TemperatureMonitoringSystem.repository;

import com.mit.TemperatureMonitoringSystem.modals.Monitor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface MonitorRepository extends MongoRepository<Monitor, Integer> {
    @Query(value="{ 'sensor_id' : ?0 }")
    List<Monitor> getSensorData(String id);

    //Get alert sent details
    @Query(value="{ 'notificationSent' : ?0 }")
    List<Monitor> getAlerts(boolean value);

    //Get data by date
    @Query(value="{ 'date' : ?0 }")
    List<Monitor> getDataByDate(String date);
}


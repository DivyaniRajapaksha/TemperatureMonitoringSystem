package com.mit.TemperatureMonitoringSystem.Repository;

import com.mit.TemperatureMonitoringSystem.Modal.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Integer> {
}

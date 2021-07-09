package com.mit.TemperatureMonitoringSystem.repository;

import com.mit.TemperatureMonitoringSystem.modals.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<User, Integer> {

    @Query(value="{ 'email' : ?0 }")
    User userLogin(String id);

}


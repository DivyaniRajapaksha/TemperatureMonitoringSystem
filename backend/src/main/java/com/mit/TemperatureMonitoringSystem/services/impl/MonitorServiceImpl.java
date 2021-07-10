package com.mit.TemperatureMonitoringSystem.services.impl;

import com.mit.TemperatureMonitoringSystem.business.MonitorFactory;
import com.mit.TemperatureMonitoringSystem.business.MonitorInterface;
import com.mit.TemperatureMonitoringSystem.modals.Monitor;
import com.mit.TemperatureMonitoringSystem.repository.MonitorRepository;
import com.mit.TemperatureMonitoringSystem.repository.UserRepository;
import com.mit.TemperatureMonitoringSystem.services.MonitorService;
import com.mit.TemperatureMonitoringSystem.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MonitorServiceImpl implements MonitorService {
    MonitorFactory monitorFactory = new MonitorFactory();
    MonitorInterface monitorInterface;

    @Autowired
    private MonitorRepository repository;

    @Autowired
    private UserService userService;

    @Override
    public void addData(Monitor monitor) {
        repository.save(monitor);
        monitorInterface=monitorFactory.getMonitorType(monitor.getType());
        monitorInterface.monitor(monitor,userService.getAllEmails());
    }

    @Override
    public List<Monitor> getData() { return repository.findAll(); }

    @Override
    public String deleteData(int id) {
        repository.deleteById(id);
        return "Data deleted successfully: id :" + id;
    }


    @Override
    public List<Monitor> getData(String id) {
        return repository.getSensorData(id);
    }
}

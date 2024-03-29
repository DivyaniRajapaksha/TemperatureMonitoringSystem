package com.mit.TemperatureMonitoringSystem.services;

import com.mit.TemperatureMonitoringSystem.modals.Monitor;

import java.util.List;


public interface MonitorService {
    void addData(Monitor monitor);
    List<Monitor> getData();
    String deleteData(int id);
    List<Monitor> getData(String id);
    List<Monitor> getNotifiedData();
    List<Monitor> getDataByDate(String date);
}

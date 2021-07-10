package com.mit.TemperatureMonitoringSystem.business;

import com.mit.TemperatureMonitoringSystem.modals.Monitor;

import java.util.List;

public abstract class MonitorInterface {
    String sensor_id;
    String date;
    String data_value;


    public abstract void monitor(Monitor monitor, List<String> emails);
}

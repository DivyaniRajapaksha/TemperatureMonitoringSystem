package com.mit.TemperatureMonitoringSystem.business;

import com.mit.TemperatureMonitoringSystem.modals.Monitor;

public abstract class MonitorInterface {
    String sensor_id;
    String date;
    String data_value;


    public abstract void monitor(Monitor monitor);
}

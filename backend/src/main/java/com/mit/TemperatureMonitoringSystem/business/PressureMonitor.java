package com.mit.TemperatureMonitoringSystem.business;

import com.mit.TemperatureMonitoringSystem.modals.Monitor;

public class PressureMonitor extends MonitorInterface {
    @Override
    public void monitor(Monitor monitor) {
        System.out.println("Pressure");
    }
}

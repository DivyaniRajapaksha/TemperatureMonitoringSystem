package com.mit.TemperatureMonitoringSystem.modals;

import java.util.Random;

public class Sensor {
    private int sensor_id = new Random().nextInt(9999999 + 1)  + 10000000;
    private String sensorName;
    private String location;

    public int getSensor_id() {
        return sensor_id;
    }

    public void setSensor_id(int sensor_id) {
        this.sensor_id = sensor_id;
    }

    public String getSensorName() {
        return sensorName;
    }

    public void setSensorName(String sensorName) {
        this.sensorName = sensorName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}

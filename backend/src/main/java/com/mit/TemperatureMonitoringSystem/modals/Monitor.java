package com.mit.TemperatureMonitoringSystem.modals;

public class Monitor {
    private String sensor_id;
    private String type;
    private String date;
    private String time;

    public boolean isNotificationSent() {
        return notificationSent;
    }

    public void setNotificationSent(boolean notificationSent) {
        this.notificationSent = notificationSent;
    }

    private boolean notificationSent;

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    private double data_value;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSensor_id() {
        return sensor_id;
    }

    public void setSensor_id(String sensor_id) {
        this.sensor_id = sensor_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getData_value() {
        return data_value;
    }

    public void setData_value(double data_value) {
        this.data_value = data_value;
    }
}

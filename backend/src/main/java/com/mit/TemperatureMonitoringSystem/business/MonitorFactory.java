package com.mit.TemperatureMonitoringSystem.business;
import com.mit.TemperatureMonitoringSystem.utils.Common_Constants;


public class MonitorFactory {
    public MonitorInterface getMonitorType(String data_type){
        if(data_type == null){
            return null;
        }
        if(data_type.equalsIgnoreCase(Common_Constants.TEMPERATURE)){
            return new TemperatureMonitor();

        } else if(data_type.equalsIgnoreCase(Common_Constants.HUMIDITY)){
            return new HumidityMonitor();

        } else if(data_type.equalsIgnoreCase(Common_Constants.PRESSURE)){
            return new PressureMonitor();
        }

        return null;
    }
}

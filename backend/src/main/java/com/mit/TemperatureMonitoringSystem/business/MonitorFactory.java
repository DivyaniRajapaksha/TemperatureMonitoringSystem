package com.mit.TemperatureMonitoringSystem.business;

<<<<<<< HEAD
import com.mit.TemperatureMonitoringSystem.Utils.Common_Constants;
=======
import com.mit.TemperatureMonitoringSystem.utils.Common_Constants;
import com.mit.TemperatureMonitoringSystem.utils.Common_Constants;
>>>>>>> b6d1b99cd5ebde8eb759771f912a2c5ed6ef65d3

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

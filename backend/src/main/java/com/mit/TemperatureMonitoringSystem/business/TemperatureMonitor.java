package com.mit.TemperatureMonitoringSystem.business;

<<<<<<< HEAD
import com.mit.TemperatureMonitoringSystem.Utils.Common_Constants;
=======
import com.mit.TemperatureMonitoringSystem.utils.Common_Constants;
>>>>>>> b6d1b99cd5ebde8eb759771f912a2c5ed6ef65d3
import com.mit.TemperatureMonitoringSystem.modals.Monitor;

public class TemperatureMonitor extends MonitorInterface {

    @Override
    public void monitor(Monitor monitor) {

<<<<<<< HEAD
        if(monitor.getData_value() > Double.parseDouble(Common_Constants.TEMPERATURE_THRESHOLD)){
            System.out.println("generate email temperature");
        }
=======
//        if(monitor.getData_value() > Double.parseDouble(Common_Constants.TEMPERATURE_THRESHOLD)){
//            System.out.println("generate email temperature");
//        }
>>>>>>> b6d1b99cd5ebde8eb759771f912a2c5ed6ef65d3
    }
}

package com.mit.TemperatureMonitoringSystem.business;

import com.mit.TemperatureMonitoringSystem.modals.Monitor;
import com.mit.TemperatureMonitoringSystem.utils.Common_Constants;
import com.mit.TemperatureMonitoringSystem.utils.EmailUtil;

import java.util.List;

public class HumidityMonitor extends MonitorInterface {
    List<String> stringList;

    @Override
    public void monitor(Monitor monitor, List<String> emails) {
        if(monitor.getData_value() > Double.parseDouble(Common_Constants.HUMIDITY_THRESHOLD)){
            System.out.println("generate email humidity");
            stringList=emails;

            EmailUtil.sendBulkEmail("Humidity Alert",stringList,"Humidity value of sensor "+monitor.getSensor_id()+" is "+monitor.getData_value()+"% High!!");
        }
    }
}

package com.mit.TemperatureMonitoringSystem.business;

import com.mit.TemperatureMonitoringSystem.modals.Monitor;
import com.mit.TemperatureMonitoringSystem.utils.Common_Constants;
import com.mit.TemperatureMonitoringSystem.utils.EmailUtil;

import java.util.List;

public class TemperatureMonitor extends MonitorInterface {

         List<String> stringList;

    @Override
    public void monitor(Monitor monitor,List<String> emails) {

        if(monitor.getData_value() > Double.parseDouble(Common_Constants.TEMPERATURE_THRESHOLD)){
            System.out.println("generate email temperature");
            stringList=emails;

            EmailUtil.sendBulkEmail("Temperature Alert",stringList,"Temperature value of sensor "+monitor.getSensor_id()+" is "+monitor.getData_value()+"C High!!");
        }

    }
}

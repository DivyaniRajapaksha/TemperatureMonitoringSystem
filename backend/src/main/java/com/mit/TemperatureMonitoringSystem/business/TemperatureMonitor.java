package com.mit.TemperatureMonitoringSystem.business;

import com.mit.TemperatureMonitoringSystem.modals.Monitor;
import com.mit.TemperatureMonitoringSystem.services.MonitorService;
import com.mit.TemperatureMonitoringSystem.services.impl.MonitorServiceImpl;
import com.mit.TemperatureMonitoringSystem.utils.Common_Constants;
import com.mit.TemperatureMonitoringSystem.utils.EmailUtil;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TemperatureMonitor extends MonitorInterface {

         List<String> stringList;
         EmailUtil emailUtil=new EmailUtil();

         @Autowired
         private MonitorService monitorService =new MonitorServiceImpl();
    @Override
    public void monitor(Monitor monitor,List<String> emails) {

        if(monitor.getData_value() > Double.parseDouble(Common_Constants.TEMPERATURE_THRESHOLD)){
            System.out.println("generate email temperature");
            stringList=emails;
          boolean result=  emailUtil.sendBulkEmail("Temperature Alert",stringList,"Temperature value of sensor "+monitor.getSensor_id()+" is "+monitor.getData_value()+"C High!!");

        }

    }
}

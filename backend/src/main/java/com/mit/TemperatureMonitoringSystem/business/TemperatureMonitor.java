package com.mit.TemperatureMonitoringSystem.business;

import com.mit.TemperatureMonitoringSystem.utils.Common_Constants;
import com.mit.TemperatureMonitoringSystem.modals.Monitor;
import com.mit.TemperatureMonitoringSystem.utils.EmailUtil;

import java.util.ArrayList;
import java.util.List;

public class TemperatureMonitor extends MonitorInterface {

    @Override
    public void monitor(Monitor monitor) {

        if(monitor.getData_value() > Double.parseDouble(Common_Constants.TEMPERATURE_THRESHOLD)){
            System.out.println("generate email temperature");

            List<String> list=new ArrayList<String>();
            list.add("anushikanethsara@gmail.com");
            list.add("anushikanethsaraanuk@gmail.com");

            EmailUtil.sendBulkEmail("Hello",list,"hdeeded");
        }

    }
}

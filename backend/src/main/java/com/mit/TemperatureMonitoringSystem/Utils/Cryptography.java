package com.mit.TemperatureMonitoringSystem.Utils;

import java.util.Base64;

public class Cryptography {
    public String encode(String encodeText){
        return Base64.getEncoder().encodeToString(encodeText.getBytes());
    }

    public String decode(String encodedString){
        byte[] decodedBytes = Base64.getDecoder().decode(encodedString);
        return new String(decodedBytes);
    }
}

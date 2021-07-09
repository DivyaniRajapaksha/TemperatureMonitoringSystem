package com.mit.TemperatureMonitoringSystem.utils;

import java.util.Base64;

public class Cryptography {

    private static Cryptography instance = new Cryptography();

    private Cryptography(){}

    public static Cryptography getInstance(){
        return instance;
    }

    public String encode(String encodeText){
        return Base64.getEncoder().encodeToString(encodeText.getBytes());
    }

    public String decode(String encodedString){
        byte[] decodedBytes = Base64.getDecoder().decode(encodedString);
        return new String(decodedBytes);
    }
}

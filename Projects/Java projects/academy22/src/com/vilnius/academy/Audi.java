package com.vilnius.academy;

public class Audi extends Car{
    @Override
    void drive(int speed) {
        if (speed == 100) {
            throw new ToFastException("Error error");
        }
        System.out.println("All good easy. 100km/h");
    }
}

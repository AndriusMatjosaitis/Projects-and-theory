package com.vilnius.academy;

public class Opel extends Car{
    @Override
    void drive(int speed) {
        if (speed == 200) {
            throw new ToFastException();
        }System.out.println("How? -10km/h");
    }
}

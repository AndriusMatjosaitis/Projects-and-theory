package com.vilnius.academy;

public class Mazda extends Car{
    @Override
    void drive(int speed) {
        if (speed == 105) {
            throw new ToFastException();
        }
        System.out.println("??????? Mazda");
    }
}

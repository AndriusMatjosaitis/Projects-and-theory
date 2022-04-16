package com.vilnius.academy;

public class Pig implements Animal{

    @Override
    public void sound() {
        System.out.println("Kriu kriu");
    }

    @Override
    public void run() {
        System.out.println("Tik Tak go go");
    }
}

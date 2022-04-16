package com.vilnius.academy;

public interface Animal {
    void sound();
    void run();

    default void eat() {
        System.out.println("Eat");
    }
}

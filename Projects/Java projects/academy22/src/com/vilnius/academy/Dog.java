package com.vilnius.academy;

public class Dog implements Animal, Home {
    @Override
    public void sound() {
        System.out.println("Au au");
    }

    @Override
    public void run() {
        System.out.println("Go go au au");
    }

    @Override
    public void eat() {
        Animal.super.eat();
    }

    @Override
    public void stay() {
        System.out.println("Yes, sir");
    }
}

package com.vilnius.academy;

public class Person {
    protected String personalNumber;
    protected Sex sex;
    protected String name;

    public Person(String personalNumber, Sex sex, String name) {
        this.personalNumber = personalNumber;
        this.sex = sex;
        this.name = name;
    }

    public void print() {
        System.out.println("Person class");
    }
}

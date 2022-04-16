package com.vilnius.academy;

public class Player extends Person {
    private HairColour hairColour;
    private int id;


    public Player(HairColour hairColour, int id, String personalNumber, String name, Sex sex) {
        super(personalNumber, sex, name);
        this.hairColour = hairColour;
        this.id = id;
    }

    @Override
    public void print() {
        System.out.println("Player class");
    }

    @Override
    public String toString() {
        return "Player{" +
                "personalNumber='" + personalNumber + '\'' +
                ", sex=" + sex +
                ", name='" + name + '\'' +
                ", hairColour=" + hairColour +
                ", id=" + id +
                '}';
    }
}

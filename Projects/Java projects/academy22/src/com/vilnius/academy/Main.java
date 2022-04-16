package com.vilnius.academy;

public class Main {

    public static void main(String[] args) {
/*
        Player player = new Player(HairColour.RED, 1, "123", "Name", Sex.MEN);
        Person playerPerson = new Player(HairColour.RED, 1, "123", "Name", Sex.MEN);
        playerPerson.print();
*/
        Car audi = new Audi();
        try {
            audi.drive(100);
        } catch (ToFastException e){
            System.out.println(e.getMessage());
            throw new RuntimeException();
        } finally {
            System.out.println("True");
        }
        System.out.println("False");

        System.out.println(back(100));
    /*    Car mazda = new Mazda();
        mazda.drive(50);

        Animal pig = new Pig();
        pig.eat();
        pig.run();
        Animal dog = new Dog();
        dog.eat();
        dog.run();
        Home homeDog = new Dog();
        homeDog.stay();*/
    }

    public static int back(int speed) {
        Car audi = new Audi();
        try {
            audi.drive(100);
        } catch (ToFastException toFastException){
            System.out.println("Oh no no no");
            return 5;
        } finally {
            return 6;
        }
    }

}

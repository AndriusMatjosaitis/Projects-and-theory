package com.company;

public class Main {

    public static void main(String[] args) {

     String[] cars = {"Subaru", "BMW", "Suzuki"};

        cars[0] = "Honda";

        System.out.println(cars[1]);

        System.out.println(cars.length);

        for (String element:cars){
            System.out.println(element);
        }

        int[] intArray = {40, 55, 63, 17, 22, 68, 89, 97, 89};

        for (int element:intArray) {
            System.out.print(element + " ");
        }
    }
}

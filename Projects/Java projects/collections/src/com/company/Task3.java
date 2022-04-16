package com.company;

import java.util.ArrayList;
import java.util.HashSet;

public class Task3 {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Pear");
        fruits.add("Banana");
        fruits.add("Apple");
        fruits.add("Cherry");
        fruits.add("Fig");
        fruits.add("Orange");
        fruits.add("Banana");
        fruits.add("Apple");

        System.out.println(fruits.size());

        HashSet<String> uniqueFruitNames = new HashSet<>(fruits);

        for (String unique: uniqueFruitNames) {
            System.out.println(unique);
        }
    }
}

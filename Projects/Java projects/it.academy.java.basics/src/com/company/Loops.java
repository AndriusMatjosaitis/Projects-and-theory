package com.company;

public class Loops {

    public static int factorial(int x) {
        int input = x;
        for (int i = 1; i < x; i++) {
            input *= i;
        }
        return input;
    }

}

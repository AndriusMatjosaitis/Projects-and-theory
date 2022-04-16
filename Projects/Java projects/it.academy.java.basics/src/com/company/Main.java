package com.company;

import static com.company.Arithmetics.*;
import static com.company.Loops.factorial;
import static com.company.Operator.triangleKind;
import static com.company.Art.art;

public class Main {

    public static void main(String[] args) {
	    String name = "Andrius";
        String surname = "Matjosaitis";
        double age = 33;
        System.out.println("Hello, my name is " + name + " " + surname + ".I am attending IT academy 2022" );

        char h = 'H';
        int ello = 3110;
        char doublew = 'w';
        int zero = 0;
        char er = 'r';
        int one = 1;
        char dee = 'd';
        double twoPointZero = 2.0;
        boolean isTrue = true;
        System.out.println(String.valueOf(h)+ello+ " " + doublew + zero + er + one + dee + " "
                + twoPointZero + " " + isTrue);

        System.out.println(calculateVolume(5));
        System.out.println(calculatePerimeter(5));
        System.out.println(inchToCm(1, 6) + "cm");
        System.out.println(triangleKind(1, 1, 1));
        System.out.println(factorial(5));
        System.out.println(art("4"));
    }
}

package com.company;

public class Operator {
    public static String triangleKind(double a, double b, double c) {
        if (a == b & b == c & c == a){
            System.out.println("Equilateral");
        } else if (a == b || b == c || c == a) {
            System.out.println("Isosceles");
        } else return "Scalene";
        return "";
    }
}
package com.company;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class Task2 {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();

        names.add("Andrius");
        names.add("Tomas");
        names.add("Jonas");
        names.add("Marius");

        for (String name : names) {
            System.out.print(name + ", ");
        }
        names.remove(0);

        for (String name : names) {
            System.out.println(name);
        }

        Student student1 = new Student("Simas", 22, 3, 78);
        Student student2 = new Student("Jonas", 25, 1, 89);
        Student student3 = new Student("Petras", 23, 2, 12);
        Student student4 = new Student("Zigmas", 21, 4, 17);
        Student student5 = new Student("Vygantas", 19, 5, 9);

        List<Student> students = new ArrayList<>();
        students.add(student1);
        students.add(student2);
        students.add(student3);
        students.add(student4);
        students.add(student5);

        for (Student student:students) {
            System.out.println(student.getName());
        }

        int[] array = {10, 20, 30};

        ArrayList<Integer> numbers = new ArrayList<>();

        for (int number:array) {
            System.out.println(number);
        }

        for (int i =0; i<students.size(); i++) {
            if (students.get(i).getAge() > 22) {
                students.remove(i);
                i--;
            } else {
                System.out.println(students.get(i).getName());
            }
        }
    }
}
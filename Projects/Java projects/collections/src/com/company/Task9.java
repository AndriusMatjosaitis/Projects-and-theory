package com.company;

import java.util.ArrayList;
import java.util.List;

public class Task9 {
    public static void main(String[] args) {
        Student a = new Student("Zigmas", 24, 2, 43);
        Student b = new Student("Petras", 29, 5, 33);
        Student c = new Student("Jonas", 26, 3, 123);
        Student d = new Student("Paulius", 27, 4, 213);
        Student e = new Student("Andrius", 21, 1, 132);

        List<Student> students = new ArrayList<>();
        students.add(a);
        students.add(b);
        students.add(c);
        students.add(d);
        students.add(e);

        students.stream().forEach(student -> student.setGrade(10));

        for (Student student:students) {
            System.out.println(student);
        }

        List<Student> notPetras = students.stream().filter(student -> !student.getName().equals("Petras")).toList();

        System.out.println(" ");

        for (Student student:notPetras) {
            System.out.println(student);
        }

    }

}
